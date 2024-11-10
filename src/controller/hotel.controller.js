import {getReservasService} from "../services/hotel.service.js"

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