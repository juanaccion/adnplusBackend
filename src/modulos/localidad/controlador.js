const TABLA = 'localidad';

module.exports = function (dbInyectada) {
    let db = dbInyectada;
    if (!db) {
        db = require('../../DB/mysql');
    }


    function todos() {
        return db.todos(TABLA);
    }

    function todosOrdenado(campo) {
        return db.todosOrdenado(TABLA, campo);
    }

    function uno(id) {
        return db.uno(TABLA, id);
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
    todosOrdenado,
    uno,
    consulta,
    agregar,
    eliminar,
    }
}