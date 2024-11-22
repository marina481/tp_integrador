import { getHabitacionesService, agregarHabitacionesService } from "../services/habitaciones.service.js";

export const obtenerHabitacionesController = async (req, res) => {
    try {
        let habitaciones = await getHabitacionesService()
        habitaciones.recordset.length === 0 ? res.send('La base de datos is empty') : res.send(habitaciones.recordset)
        return habitaciones.recordset;
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las habitaciones' })
    }
}

export const agregarHabitacionesController = async (req, res) => {
    const { title, price, description, imageUpload } = req.body;
    console.log("req.body");
    console.log(req.body);

    if (title == null || price == null || description == null || imageUpload == null) {
        res.status(400).send({ message: 'Hay campos en blanco, por favor complete todos los campos.' });
    }

    try {
        const nuevaHabitacion = await agregarHabitacionesService({ title, price, description, imageUpload });
        res.status(200).send({ mensaje: 'Habitacion agregada correctamente', reserva: nuevaHabitacion })

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error del controller al agregar la habitacion' })
    }
}
