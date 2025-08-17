import { Reservation } from "../models/reservationSchema.js";
import ErrorHandler from "../error/error.js";

export const sendReservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;
    const userId = req.user.id;
    const userRole = req.user.role; // Extracted from JWT

    if (!firstname || !lastname || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill the form", 400));
    }

    if (userRole === "admin") {
        return next(new ErrorHandler("Admins are not allowed to make reservations.", 403));
    }

    try {
        await Reservation.create({
            userId,
            firstname,
            lastname,
            email,
            phone,
            date,
            time,
            status: "Waiting for verification" // Default status
        });

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};
