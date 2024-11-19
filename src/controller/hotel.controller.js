import {getResenasService, agregarResenasService} from "../services/hotel.service.js"

export const getResenasController = async (req,res) => {
    try{
        console.log('Entre al try de controller')
        let resenas = await getReservasService()
        console.log('Volvi al try de controller')
        resenas.recordset.length === 0 ? res.send('La base de datos is empty') : res.send(resenas.recordset)
    }
    catch(error){
        console.error(error)
        res.status(500).send({message:'Error al obtener las resenas'})
    }

}

export const agregarResenasController = async (req, res) => {
    const { resenas } = req.body;
    console.log("req.body");
    console.log(req.body);

    if (resenas == null) {
        res.status(400).send({ message: 'Hay campos en blanco, por favor complete todos los campos.' });
    }

    try {
        const nuevaResena = await agregarResenaService({descripcion})
        res.status(200).send({mensaje: 'Reserva agregada correctamente', resena: nuevaResena})
        
    } catch (error) {
        console.error(error)
        res.status(500).send({message:'Error del controller al agregar la resena'})
    }
}