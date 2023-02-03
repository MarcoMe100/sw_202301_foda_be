import express from 'express';
const router = express.Router();


import { Usuarios , Iusuarios } from '@libs/Empresas/Usuarios';
const usuarioModel =new Usuarios();

usuarioModel.add({
    codigo: '',
    nombre: '',
    correo: '',
    password: '',
});
//registrar los edpoint en router


router.get('/',(_req, res)=>{
    const jsonUrls = {
        "getAll":{"method":"get", "url":"usuarios/all"},
        "getById":{"method":"get", "url":"usuarios/byid/:id"},
        "new":{"method":"post", "url":"usuarios/new"},
        "update":{"method":"put", "url":"usuarios/upd/:id"},
        "delete":{"method":"delete", "url":"usuarios/del/:id"},

    };
    res.status(200).json(jsonUrls);
});


router.get('/all', (_req, res) =>{
    res.status(200).json(usuarioModel.getAll());

});


router.get('/byid/:id', (req, res)=>{
    const { id: codigo} = req.params;
    const usuario = usuarioModel.getById(codigo);
    if(usuario){
        return res.status(200).json(usuario);
    }
    return res.status(404).json({"error":"no se encontro la usuario"});
});


router.post('/new', (req, res) => {
    const{nombre ="Marco", correo ="" ,password="" } = req.body;
    const newUsuarios: Iusuarios = {
    codigo : "",
    nombre,
    correo,
    password
    

    };
    if (usuarioModel.add(newUsuarios)){
        res.status(200).json({"created": true});
    }
    return res.status(404).json({"error": "error al agregar un nuevo usuario"});
});



router.put('/upd/:id', (req, res)=>{
    const { id } =req.params;
    const { nombre="John Doe Corp", correo="", password=""} =req.body;
  
    const updateUsuarios : Iusuarios = {
      codigo : id,
      nombre,
      correo,
      password
    
      
    }
  
  if (usuarioModel.update(updateUsuarios)){
      return res.status(200).json({"updated": true});
  
  }
  return res.status(404).json({"error": "Error al actualizar"})
  });
  

  router.delete('/del/:id', (req, res)=>{
    const { id: codigo } = req.params;
    if(usuarioModel.delete(codigo)) {
      return res.status(200).json({"deleted": true});
    }
    return res.status(404).json({"error":"no se puede eliminar"});
});

export default router;





