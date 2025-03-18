// import ErrorHandler from "../error/error.js";
// import { Reservation } from "../models/reservationSchema.js";

// export const sendReservation = async (req, res, next) => {
//     const { firstname, lastname, email, phone, date, time } = req.body;
//     const userId = req.user.id; // Extracted from JWT
//     console.log(firstname ,lastname ,email ,phone ,date ,time)
//     console.log(userId)
//     if (!firstname || !lastname || !email || !phone || !date || !time) {
//         return next(new ErrorHandler("Please fill the form", 400));
//     }

//     try {
//         await Reservation.create({ userId, firstname, lastname, email, phone, date, time });
//         res.status(200).json({
//             success: true,
//             message: "Reservation sent successfully",
//         });
//     } catch (error) {
//         if (error.name === "ValidationError") {
//             const validationErrors = Object.values(error.errors).map(err => err.message);
//             return next(new ErrorHandler(validationErrors.join(", "), 400));
//         }
//         return next(error);
//     }
// };

import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;
    const userId = req.user.id;
    const userRole = req.user.role; // Extracted from JWT

    console.log(firstname, lastname, email, phone, date, time);
    console.log(userId, userRole);

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
