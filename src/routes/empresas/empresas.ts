import express from 'express';
const router = express.Router();


import { Empresas ,IEmpresas } from '@libs/Empresas/Empresas';
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

export default router;
