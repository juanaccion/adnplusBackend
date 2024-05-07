const TABLA = 'grupos';
const VISTA = 'vista_grupos_todos';

module.exports = function (dbInyectada) {
    let db = dbInyectada;
    if (!db) {
        db = require('../../DB/mysql');
    }


    function todos() {
        return db.todos(VISTA);
    }

    function todosOrdenado(campo) {
        return db.todosOrdenado(TABLA, campo);
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    function consulta(campo, valor, orden) {
        return db.consulta(VISTA, campo, valor, orden);
    }
    
    function conteo(campo, valor) {
        return db.consulta(TABLA, campo, valor);
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
    conteo,
    agregar,
    eliminar,
    }
}