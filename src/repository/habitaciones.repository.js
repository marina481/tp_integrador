import { getConnection, sql, queries } from '../database/export.js';

export const agregarHabitacionesRepository = async (nuevaHabitacion) => {
    const { title, price, description, imageUpload } = nuevaHabitacion;
    
    console.log("Datos de la nueva habitación:", nuevaHabitacion);

    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('title', sql.NVarChar, title)
            .input('price', sql.Int, price)
            .input('description', sql.NVarChar, description)
            .input('imageUpload', sql.NVarChar, imageUpload)
            .query(queries.addHabitacion);

        
        console.log("Nueva habitación agregada correctamente.");
        console.table(nuevaHabitacion);  

        return resultado;  
    } catch (error) {
        console.error('Error al agregar la habitación:', error);
        
        throw new Error(`Error en el repositorio al agregar la habitación: ${error.message}`);
    } finally {
        pool.close(); 
    }
};
