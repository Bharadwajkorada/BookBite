import express from "express";
import { sendReservation } from "../controller/reservation.js";
import { sendList } from "../controller/reservationsList.js";
import { updateReservationStatus } from "../controller/updateStatus.js";
import { registerUser } from "../controller/signup.js";
import { loginUser } from "../controller/login.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/send", protect, sendReservation);
router.get("/getall", sendList);
router.put("/update/:id", updateReservationStatus);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;