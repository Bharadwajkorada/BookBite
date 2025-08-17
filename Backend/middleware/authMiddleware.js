import jwt from "jsonwebtoken";
import { users } from "../models/userSchema.js";
import ErrorHandler from "../error/error.js";

export const protect = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        // if (!authHeader || !authHeader.startsWith("Bearer ")) {
        //     return next(new ErrorHandler("Unauthorized: No token provided", 401));
        // }
        const token = req.headers.authorization?.split(" ")[1]; // Extract token
        console.log("Received Token on Backend:", token);
        // const token = authHeader.split(" ")[1]; // Extract token

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await users.findById(decoded.id).select("-password");
        console.log("hello")
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid token", 401));
    }
};
