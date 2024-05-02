const TABLA = 'integrantes';

module.exports = function (dbInyectada) {
    let db = dbInyectada;
    if (!db) {
        db = require('../../DB/mysql');
    }


    function todos() {
        return db.todos(TABLA);
    }
    
    function uno(id) {
        return db.uno(TABLA, id);
    }

    function todosOrdenado(campo) {
        return db.todosOrdenado(TABLA, campo);
    }

    function consulta(campo, valor, orden) {
        return db.consulta(TABLA, campo, valor, orden);
    }
    

    function agregar(body) {
        return db.agregar(TABLA, body);
    }
    
    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }


    return {
    todos,
    uno,
    todosOrdenado,
    consulta,
    agregar,
    eliminar,
    }
}