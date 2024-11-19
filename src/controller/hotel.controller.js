import {getReservasService, agregarReservaService, eliminarReservaService} from "../services/hotel.service.js"

export const getReservasController = async (req,res) => {
    try{
        let reservas = await getReservasService()
        
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

export const eliminarReservaController = async (req, res) => {
    const { id } = req.params;
    try{
        const reservaEliminada = await eliminarReservaService(id)

        if(!reservaEliminada) {
            return res.status(404).send({mensaje: `Ninguna reserva tiene el ID ${id}`})
        }

        res.status(200).send({mensaje: `Reserva con ID ${id} eliminada`})
    }
    catch (error){
        console.error(error)
        res.status(500).send({message:'Error del controller al eliminar la reserva'})
    }
}