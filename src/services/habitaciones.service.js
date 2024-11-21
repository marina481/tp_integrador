import {agregarHabitacionesRepository, getHabitacionesRepository} from '../repository/habitaciones.repository.js'

export const agregarHabitacionesService = async (nuevaHabitacion) => {
    try {
        console.log('Entre al try de habitaciones')
        const habitacion= await agregarHabitacionesRepository(nuevaHabitacion);
        return habitacion;
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se pudo agregar la habitación')
    }
}

export const getHabitacionesService = async () => {
    try {
        console.log('Entre al try de service')
        return getHabitacionesRepository()
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se han podido obtener los datos')
    }
}
