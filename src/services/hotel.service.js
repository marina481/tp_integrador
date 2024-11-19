import {getResenasRepository, agregarResenasRepository} from '../repository/hotel.repository.js'

export const getResenasService = async () => {
    try {
        
        
        console.log('Entre al try de service')
        return getResenasRepository()
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se han podido obtener los datos')
    }
}

export const agregarResenasService = async (nuevaResenas) => {
    try {
        console.log('Entre al try de service')
        const resena = await agregarResenasRepository(nuevaResenas);
        return resena;
    }
    catch(error) {
        console.error('Error desde el servicio' , error)
        throw new Error('No se han podido obtener los datos')
    }
}