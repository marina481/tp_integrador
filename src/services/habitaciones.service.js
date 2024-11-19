import {agregarHabitacionesRepository} from '../repository/habitaciones.repository.js'

export const agregarHabitacionesService = async (nuevaHabitacion) => {
    try {
        console.log('Entre al try de service')
        const habitacion= await agregarHabitacionesRepository(nuevaHabitacion);
        return habitacion;
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se pudo agregar la habitación')
    }
}
