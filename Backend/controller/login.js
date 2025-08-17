// import { users } from "../models/userSchema.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv"

// dotenv.config()

// export const loginUser = async (req, res, next) => {
//     console.log("Login request received:", req.body);

//     let user = await users.findOne({ email: req.body.email });
//     if (!user) {
//         console.log("User not found");
//         return res.status(400).json({ message: "User not found" });
//     }

//     console.log("User found:", user);

//     bcrypt.compare(req.body.password, user.password, function (err, result) {
//         if (err) {
//             console.log("Error comparing passwords:", err);
//             return res.status(500).json({ message: "Error comparing passwords" });
//         }

//         console.log("Password match result:", result);

//         if (!result) {
//             console.log("Incorrect password");
//             return res.status(400).json({ message: "Incorrect password" });
//         }

//         // let token = jwt.sign({ email: req.body.email }, "jwt");
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//             expiresIn: "7d",
//         });
//         console.log("Generated token:", token);
//         // Set cookie and send response
//         res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "Strict" });
//         console.log("Login successful, token sent to frontend.");
//         return res.status(200).json({ message: "Login successful", token });
//     });
// };


import { users } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginUser = async (req, res, next) => {
    console.log("Login request received:", req.body);

    let user = await users.findOne({ email: req.body.email });
    if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "User not found" });
    }

    console.log("User found:", user);

    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
            console.log("Error comparing passwords:", err);
            return res.status(500).json({ message: "Error comparing passwords" });
        }

        console.log("Password match result:", result);

        if (!result) {
            console.log("Incorrect password");
            return res.status(400).json({ message: "Incorrect password" });
        }

        // Generate JWT token including user ID and role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        console.log("Generated token:", token);

        // Set cookie and send response
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "Strict" });
        console.log("Login successful, token sent to frontend.");

        return res.status(200).json({ 
            message: "Login successful", 
            token, 
            role: user.role  // Send user role to frontend
        });
    });
};
