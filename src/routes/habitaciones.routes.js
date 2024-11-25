import { Router } from "express"
import { obtenerHabitacionesController, agregarHabitacionesController } from '../controller/habitaciones.controller.js'

const router = Router();

// Definición de la ruta POST para agregar habitaciones
router.get('/Habitaciones', obtenerHabitacionesController);
router.post('/Habitaciones', agregarHabitacionesController);

export default router;
