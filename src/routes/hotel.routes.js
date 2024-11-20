import { Router } from "express"

import { } from '../controller/hotel.controller.js'

const router = Router();



import { agregarReservaController, getReservasController, eliminarReservaController, agregarResenasController, getResenasController} from '../controller/hotel.controller.js'

const router = Router();

router.get('/Reservas', getReservasController);
router.post('/Reservas',agregarReservaController);
router.delete('/Reservas/:id', eliminarReservaController);
router.get('/Resenas', getResenasController);
router.post('/Resenas',agregarResenasController);


export default router