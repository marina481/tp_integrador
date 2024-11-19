import { agregarHabitacionesService } from "../services/habitaciones.service.js";

export const agregarHabitacionesController = async (req, res) => {
    const { title, price, description, imageUpload } = req.body;
    console.log("req.body");
    console.log(req.body);

    if (title == null || price == null || description == null || imageUpload == null ) {
        res.status(400).send({ message: 'Por favor complete todos los campos.' });
    }

    try {

        console.log('Entre al try de controller de habitaciones')
        const nuevaHabitacion = await agregarHabitacionesService({ title, price, description, imageUpload });
        res.status(200).send({ mensaje: 'Habitación agregada correctamente', habitacion: nuevaHabitacion });
        
        
    } catch (error) {
        console.error('Error al agregar la habitación:', error);
        res.status(500).send({ message: 'Error al agregar la habitación. Inténtalo nuevamente.' });
    }
};
