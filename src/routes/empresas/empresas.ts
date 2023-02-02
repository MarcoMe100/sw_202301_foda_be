import express from 'express';
const router = express.Router();


import { Empresas , IEmpresas } from '@libs/Empresas/Empresas';
const empresasModel =new Empresas();

empresasModel.add({
    codigo: '',
    nombre: 'Mi empresa',
    status: 'Activo'
});
//registrar los edpoint en router

router.get('/',(_req, res)=>{
    const jsonUrls = {
        "getAll":{"method":"get", "url":"empresas/all"},
        "getById":{"method":"get", "url":"empresas/byid/:id"},
        "new":{"method":"post", "url":"empresas/new"},
        "update":{"method":"put", "url":"empresas/upd/:id"},
        "delete":{"method":"delete", "url":"empresas/del/:id"},

    };
    res.status(200).json(jsonUrls);
});

router.get('/all', (_req, res) =>{
    res.status(200).json(empresasModel.getAll());

});

router.get('/byid/:id', (req, res)=>{
    const { id: codigo} = req.params;
    const empresa = empresasModel.getById(codigo);
    if(empresa){
        return res.status(200).json(empresa);
    }
    return res.status(404).json({"error":"no se encontro la empresa"});
})

router.post('/new', (req, res) => {
    const{nombre ="John Doe Corp", status = "Activo"} = req.body;
    const newEmpresas: IEmpresas = {
    codigo : "",
    nombre,
    status

    };
    if (empresasModel.add(newEmpresas)){
        res.status(200).json({"created": true});
    }
    return res.status(404).json({"error": "error al agregar una nueva empresa"});
});


router.put('/upd/:id', (req, res)=>{
  const { id } =req.params;
  const { nombre="John Doe Corp", status="Activo", observacion=""} =req.body;

  const updateEmpresas : IEmpresas = {
    codigo : id,
    nombre,
    status,
    observacion
  }

if (empresasModel.update(updateEmpresas)){
    return res.status(200).json({"updated": true});

}
return res.status(404).json({"error": "Error al actualizar"})
});

router.delete('/del/:id', (req, res)=>{
      const { id: codigo } = req.params;
      if(empresasModel.delete(codigo)) {
        return res.status(200).json({"deleted": true});
      }
      return res.status(404).json({"error":"no se puede eliminar"});
});

export default router;
