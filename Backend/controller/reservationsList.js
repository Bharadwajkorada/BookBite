// import { Reservation } from "../models/reservationSchema.js";
// import ErrorHandler from "../error/error.js";
// export const sendList = async (req, res, next) => {
//     try {
//         const userId = req.user.id; // Extract from JWT
//         const userReservations = await Reservation.find({ userId });

//         res.status(200).json({
//             success: true,
//             message: "List received",
//             data: userReservations,
//         });
//     } catch (error) {
//         return next(new ErrorHandler("Failed to retrieve reservations", 500));
//     }
// };

import { Reservation } from "../models/reservationSchema.js";
import ErrorHandler from "../error/error.js";

// Fetch reservations for users & admins
export const sendList = async (req, res, next) => {
    try {
        let reservations;
        
        if (req.user.role === "admin") {
            // Admin sees all reservations
            reservations = await Reservation.find();
        } else {
            // Normal user sees only their reservations
            reservations = await Reservation.find({ userId: req.user.id });
        }

        res.status(200).json({
            success: true,
            message: "List received",
            data: reservations,
        });
    } catch (error) {
        return next(new ErrorHandler("Failed to retrieve reservations", 500));
    }
};

// Admin: Accept or Reject Reservations
export const updateReservationStatus = async (req, res, next) => {
    // console.log(req.user);
    try {
        // if (req.user.role !== "admin") {
        //     return next(new ErrorHandler("Unauthorized action", 403));
        // }
        console.log("hello")
        const { reservationId, status } = req.body;
        if (!["Verified", "Rejected"].includes(status)) {
            return next(new ErrorHandler("Invalid status value", 400));
        }

        const reservation = await Reservation.findById(reservationId);
        if (!reservation) {
            return next(new ErrorHandler("Reservation not found", 404));
        }

        reservation.status = status;
        await reservation.save();

        res.status(200).json({
            success: true,
            message: `Reservation ${status.toLowerCase()} successfully`,
        });
    } catch (error) {
        return next(new ErrorHandler("Failed to update reservation status", 500));
    }
};
