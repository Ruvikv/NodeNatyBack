import { conexionDB } from "./conexion.js";

export default class AdminReclamosTipo {


obtenerTodosLosTipos = async () => {
    const sql = 'SELECT * FROM reclamostipo;';
    const [result] = await conexionDB.query(sql); 
    return result;
}

//----------------------------------------------------------------

obtenerTipoPorId = async (id) => {
    const sql = 'SELECT * FROM reclamostipo WHERE idReclamoTipo = ?;';
    const [result] = await conexionDB.query(sql, [id]);
    return result;
}

//----------------------------------------------------------------

crearNuevoTipo = async (descripcion, activo) => {
    const sql = 'INSERT INTO reclamostipo (descripcion, activo) VALUES (?, ?);';
    const [result] = await conexionDB.query(sql, [descripcion, activo]);
    return result;
}

//----------------------------------------------------------------

actualizarTipo = async (id, descripcion, activo) => {
    const sql = 'UPDATE reclamostipo SET descripcion = ?, activo = ? WHERE idReclamoTipo = ?;';
    const [result] = await conexionDB.query(sql, [descripcion, activo, id]);
    return result;
}

//----------------------------------------------------------------

eliminarTipo =  async (id) => {
    const sql = 'UPDATE reclamostipo SET activo = 0 WHERE idReclamoTipo = ?;';
    const [result] = await conexionDB.query(sql, [id]);

    if (result.affectedRows === 0) {
        throw new Error("No se pudo eliminar el empleado.");
    }
    return result;
}


}