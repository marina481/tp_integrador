import {getConnection,sql} from '../database/export.js'
import queries from '../database/queries.js'

export const getReservasRepository = async () => {
    const pool = await getConnection();

    try{
        console.log('Entre al try de Repository')
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