const TABLA = 'entrenamiento';

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
    agregar,
    eliminar,
    }
}