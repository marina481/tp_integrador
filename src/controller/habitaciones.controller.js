import {agregarHabitacionesService} from "../services/habitaciones.service.js"

export const agregarHabitacionesController=async(req,res)=>{
    const{title, price,description, imageUpload} = req.body;

    console.log("req.body", req.body);
    

    if(title== null || price== null || description ==null || imageUpload == null){
        res.status(400).send({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newRoom = await agregarHabitacionesService({title, price,description, imageUpload})
        res.status(200).send({mensaje: 'Habitación agregada correctamente', habitacion: newRoom})
        
    } catch (error) {
        console.error(error)
        res.status(500).send({message:'Error del controller al agregar la nueva habotación'})
    }


}

