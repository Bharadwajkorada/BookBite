import { Reservation } from "../models/reservationSchema.js";
import ErrorHandler from "../error/error.js";

export const updateReservationStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return next(new ErrorHandler("Status is required", 400));
        }

        if (!["Waiting for verification", "Verified", "Rejected"].includes(status)) {
            return next(new ErrorHandler("Invalid status", 400));
        }

        const reservation = await Reservation.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!reservation) {
            return next(new ErrorHandler("Reservation not found", 404));
        }

        res.status(200).json({
            success: true,
            message: "Reservation status updated successfully",
            reservation
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};
