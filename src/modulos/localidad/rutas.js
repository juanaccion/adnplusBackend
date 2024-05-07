const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');


const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.get('/orden/:campo', todosOrdenado);
router.get('/consulta/:campo/:valor/:orden', consulta);
router.get('/conteo/:campo/:valor', conteo);
router.put('/', eliminar);
router.post('/', agregar);



async function todos (req, res, next){
    //res.send('Clientes OK')
    try {
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function todosOrdenado (req, res, next){
    try {
        const items = await controlador.todosOrdenado(req.params.campo)
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function uno(req, res, next){
    try{
        const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function consulta(req, res, next){
    const campo = req.params.campo;
    const valor = req.params.valor;
    const orden = req.params.orden;
    try{
        const items = await controlador.consulta(campo, valor, orden)
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function conteo(req, res, next){
    const campo = req.params.campo;
    const valor = req.params.valor;
    try{
        const items = await controlador.consulta(campo, valor)
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
}

async function agregar(req, res, next){
    try{
        const items = await controlador.agregar(req.body)
        if(req.body.id == 0){
            mensaje = 'Item guardado con exito';
        } else {
            mensaje = 'Item actualizado con exito';
        }
        respuesta.success(req, res, mensaje, 201)
    }catch(err){
        next(err);
    }
}

async function eliminar(req, res, next){
    try{
        const items = await controlador.eliminar(req.body)
        respuesta.success(req, res, 'Item eliminado', 200)
    }catch(err){
        next(err);
    }
}

module.exports = router;