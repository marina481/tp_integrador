import { Router } from "express"
import { agregarReservaController, getReservasController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/Reservas', getReservasController);
router.post('/Reservas',agregarReservaController);

export default router