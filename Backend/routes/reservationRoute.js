import express from 'express'
import {sendReservation} from '../controller/reservation.js'
import {sendList,updateReservationStatus} from '../controller/reservationsList.js'
import {registerUser} from '../controller/signup.js'
import {loginUser} from '../controller/login.js'
import { protect } from "../middleware/authMiddleware.js";
const router =express.Router()

router.post('/send', protect,sendReservation)
router.get('/list',protect,sendList)
router.post('/update_status',updateReservationStatus)
router.post('/register',registerUser)
router.post('/login',loginUser)
export default router;