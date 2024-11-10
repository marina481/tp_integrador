import { Router } from "express"
import { getReservasController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/Reservas', getReservasController)

export default router