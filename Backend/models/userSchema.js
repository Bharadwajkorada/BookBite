// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:[true,"Enter Username"]
//     },
//     password:{
//         type:String,
//         required:[true,"Enter Password"]
//     },
//     email:{
//         type:String,
//         unique: true,
//         required:[true,"Enter email"]
//     },

// });

// // Correctly define the model
// export const users = mongoose.model("users", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter Username"]
    },
    password: {
        type: String,
        required: [true, "Enter Password"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Enter email"]
    },
    role: {
        type: String,
        enum: ["admin", "user"], // Only allows 'admin' or 'user'
        default: "user" // Default role is 'user'
    }
});

// Export the model
export const users = mongoose.model("users", userSchema);
