import {getReservasRepository} from '../repository/hotel.repository.js'

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