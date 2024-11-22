import { getConnection, sql, queries } from '../database/export.js'


export const getHabitacionesRepository = async () => {
    const pool = await getConnection();

    try {
        console.log('Entre al try de habitaciones repository')
        const resultado = await pool.request().query(queries.getHabitaciones)
        console.table(resultado.recordset)
        return resultado
    }
    catch (error) {
        console.log('Error en el repositorio:', error)
        throw new Error('No se han podido obtener los datos')
    }
    finally {
        pool.close
    }
}



export const agregarHabitacionesRepository = async (nuevaHabitacion) => {
    const { title, price, description, imageUpload } = nuevaHabitacion;
    console.log("Datos de la nueva habitación: en repository", nuevaHabitacion);

    const pool = await getConnection();
    try {
        console.log('Entre al try de habitaciones repository');
        const resultado= await pool.request()
            .input('title', sql.NVarChar, title)
            .input('price', sql.Int, price)
            .input('description', sql.NVarChar, description)
            .input('imageUpload', sql.NVarChar, imageUpload)
            .query(queries.addHabitacion);

        const nuevaHabitacion = { title, price, description, imageUpload }        
        console.log("Nueva habitación agregada correctamente.");
        console.table(nuevaHabitacion);

    } catch (error) {
        console.error('Error en el repository al agregar la habitación:', error);
        throw new Error(`Error al agregar la habitación: ${error.message}`);
    } finally {
        pool.close(); 
    }
};

export const getHabitacionesRepository = async () => {
    const pool = await getConnection();

    try{
        const resultado = await pool.request().query(queries.getHabitaciones)
                
        console.table(resultado.recordset)

        return resultado

    }
    catch(error){
        console.log('Error en el repositorio:', error)
       throw new Error('Anda caprichosa la base de datos')
      }
    finally {
        pool.close();
    }
}