import {getReservasService, agregarReservaService} from "../services/hotel.service.js"

export const getReservasController = async (req,res) => {
    try{
        console.log('Entre al try de controller')
        let reservas = await getReservasService()
        console.log('Volvi al try de controller')
        reservas.recordset.length === 0 ? res.send('La base de datos is empty') : res.send(reservas.recordset)
    }
    catch(error){
        console.error(error)
        res.status(500).send({message:'Error al obtener las reservas'})
    }

}

export const agregarReservaController = async (req, res) => {
    const { nombre, telefono, email, habitacion, fecha_inicio, fecha_fin } = req.body;
    console.log("req.body");
    console.log(req.body);

    if (nombre == null || telefono == null || email == null || habitacion == null || fecha_inicio == null || fecha_fin == null) {
        res.status(400).send({ message: 'Hay campos en blanco, por favor complete todos los campos.' });
    }

    try {
        const nuevaReserva = await agregarReservaService({nombre, telefono, email, habitacion, fecha_inicio, fecha_fin})
        res.status(200).send({mensaje: 'Reserva agregada correctamente', reserva: nuevaReserva})
        
    } catch (error) {
        console.error(error)
        res.status(500).send({message:'Error del controller al agregar la reserva'})
    }
}