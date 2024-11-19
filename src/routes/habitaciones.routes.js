import { Router } from "express"
import { agregarHabitacionesController} from '../controller/habitaciones.controller.js'

const router = Router();

// Definición de la ruta POST para agregar habitaciones
router.post('/Habitaciones',agregarHabitacionesController);

export default router;
