import { getConnection, sql, queries } from '../database/export.js'
//import queries from '../database/queries.js'

export const getResenasRepository = async () => {
    const pool = await getConnection();

    try{
        console.log('Entre al try de Repository')
        const resultado = await pool.request().query(queries.getReservas)
        
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

export const agregarResenasRepository = async (nuevaResena) => {
    const { descripcion } = nuevaResena;
    console.log(nuevaResena);
    const pool = await getConnection();

    try {
        const resultado = await pool.request()
            .input('descripcion', sql.NVarChar, descripcion)
            .query(queries.addReserva);

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