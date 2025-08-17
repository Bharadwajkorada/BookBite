// import { users }  from '../models/userSchema.js'
// import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken';


// export const registerUser=async(req,res,next)=>{
//     try
//     {
//         const {username,email,password}=req.body;
//         // console.log(req.body)
//         // if(!username || !password ||!email){
//         //     return next(new ErrorHandler("please fill form",400))
//         // }
//         bcrypt.genSalt(10, function(err, salt) {
//             bcrypt.hash(password, salt,async function(err, hash) {
//                 let newuser=await users.create({
//                     username,
//                     password:hash,
//                     email,
//                 })
//                 console.log(newuser)
//                 // let token=jwt.sign({email},'jwt')
//                 res.json({
//                     "sucess":"hello"
//                 })
//             });
//         });
//     }catch(error){
//         if (error.code === 11000) {
//             return res.status(400).json({ message: "Email already registered. Please log in." });
//         }
//     }
// }

// import { users } from '../models/userSchema.js';
// import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken';

// export const registerUser = async (req, res, next) => {
//     try {
//         const { username, email, password } = req.body;

//         // Check if email already exists
//         const existingUser = await users.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "Email already registered. Please log in." });
//         }

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create new user
//         let newUser = await users.create({
//             username,
//             password: hashedPassword,
//             email,
//         });

//         console.log(newUser);

//         res.status(201).json({ success: true, message: "User registered successfully" });
//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


import { users } from '../models/userSchema.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;

        // Check if email already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered. Please log in." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        let newUser = await users.create({
            username,
            password: hashedPassword,
            email,
            role, // Directly save role from frontend input
        });

        console.log(newUser);

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
