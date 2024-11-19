import { Router } from "express"
import { agregarResenasController, getResenasController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/Resenas', getResenasController);
router.post('/Resenas',agregarResenasController);

export default router