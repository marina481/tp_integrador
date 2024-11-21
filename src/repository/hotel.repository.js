import { getConnection, sql, queries } from '../database/export.js'
//import queries from '../database/queries.js'

export const getResenasRepository = async () => {
    const pool = await getConnection();

    try{
        console.log('Entre al try de Repository')
        const resultado = await pool.request().query(queries.getResenas)
                
        console.table(resultado.recordset)

        return resultado

    }
    catch(error){
        console.log('Error en el repositorio:', error)
        throw new Error('tira error')
      }
    finally {
        pool.close
    }
}

export const getReservasRepository = async () => {
    const pool = await getConnection();

    try{
        const resultado = await pool.request().query(queries.getReservas)
                
        console.table(resultado.recordset)

        return resultado

    }
    catch(error){
        console.log('Error en el repositorio:', error)
       throw new Error('Anda caprichosa la base de datos')
      }
    finally {
        pool.close
    }
}

export const agregarResenasRepository = async (nuevaResena) => {
    const { descripcion } = nuevaResena;
    console.log(nuevaResena);
    const pool = await getConnection();

    try {
        const resultado = await pool.request()
            .input('descripcion', sql.NVarChar, descripcion)
            .query(queries.addResenas);

        const nuevaResena = { descripcion }
        console.log("Nueva resena:")
        console.table(nuevaResena);
    } catch(error) {
        console.log('Error en el repositorio:', error)
        throw new Error('El repositorio no puede agregar la resena.')
    } finally {
        pool.close()
    }
}

  
export const agregarReservaRepository = async (nuevaReserva) => {
    const { nombre, telefono, email, habitacion, fecha_inicio, fecha_fin } = nuevaReserva;
    console.log(nuevaReserva);
    const pool = await getConnection();

    try {
        const resultado = await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('telefono', sql.Int, telefono)
            .input('email', sql.NVarChar, email)
            .input('habitacion', sql.Int, habitacion)
            .input('fecha_inicio', sql.Date, fecha_inicio)
            .input('fecha_fin', sql.Date, fecha_fin)
            .query(queries.addReserva);

        const nuevaReserva = { nombre, telefono, email, habitacion, fecha_inicio, fecha_fin }
        console.log("Nueva reserva:")
        console.table(nuevaReserva);
    } catch(error) {
        console.log('Error en el repositorio:', error)
        throw new Error('El repositorio no puede agregar la reserva.')
    } finally {
        pool.close()
    }
}


export const eliminarReservaRepository = async (id) => {
    const pool = await getConnection();

    try{
        const reservaEncontrada = await pool.request().input('id', sql.Int, id).query(queries.getReservabyId)
        console.log(reservaEncontrada)
        if (reservaEncontrada.recordset.length === 0){
            throw new Error('No hay reserva con ese id')
        }
        else{
            console.log(`Se elimino la reserva con el ID: ${id}`)
            console.table(reservaEncontrada.recordset[0])
        }

        const reservaEliminada = reservaEncontrada.recordset[0]

        await pool.request().input('id', sql.Int, id).query(queries.deleteReserva)
        return reservaEliminada
    }
    catch(error){
        console.log('Error en el repositorio:', error)
        throw new Error('Error al eliminar la reserva de base')
    }
    finally{
        pool.close
    }
}