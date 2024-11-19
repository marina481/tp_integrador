import { Router } from "express"
import { agregarReservaController, getReservasController, eliminarReservaController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/Reservas', getReservasController);
router.post('/Reservas',agregarReservaController);
router.delete('/Reservas/:id', eliminarReservaController);

export default router