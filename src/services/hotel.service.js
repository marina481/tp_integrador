import {getReservasRepository, agregarReservaRepository, eliminarReservaRepository} from '../repository/hotel.repository.js'

export const getReservasService = async () => {
    try {
        //Pasa por el service por protocolo aunque no haga nada
        console.log('Entre al try de service')
        return getReservasRepository()
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se han podido obtener los datos')
    }
}

export const agregarReservaService = async (nuevaReserva) => {
    try {
        console.log('Entre al try de service')
        const reserva = await agregarReservaRepository(nuevaReserva);
        return reserva;
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se han podido obtener los datos')
    }
}

export const eliminarReservaService = async (id) => {
    try {
        const reservaEliminada = await eliminarReservaRepository(id);
        return reservaEliminada;
    }
    catch (error){
        console.error('Error desde el servicio' , error)
    }
}
