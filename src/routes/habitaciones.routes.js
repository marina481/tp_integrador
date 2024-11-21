import { Router } from "express"
import { agregarHabitacionesController, getHabitacionesController } from '../controller/habitaciones.controller.js'

const router = Router();

// Definición de la ruta POST para agregar habitaciones
router.get('/Habitaciones',getHabitacionesController);
router.post('/Habitaciones',agregarHabitacionesController);


export default router;
