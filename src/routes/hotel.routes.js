import { Router } from "express"
import { agregarReservaController, getReservasController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/reservas', getReservasController);
router.post('/reservas',agregarReservaController);

export default router