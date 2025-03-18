import mongoose from "mongoose";
import validator from 'validator'

// const reservationSchema=new mongoose.Schema({
//     firstname:{
//         type:String,
//         required:true,
//         minLength:[3,"FirstName minimum should be 3"],
//         maxLength:[15,"FirstName maximum should be 15"]
//     },
//     lastname:{
//         type:String,
//         required:true,
//         minLength:[3,"LastName minimum should be 3"],
//         maxLength:[15,"LastName maximum should be 15"]
//     },
//     email:{
//         type:String,
//         required:true,
//         validate:[validator.isEmail,"Give valid email!"]
//     },
//     phone:{
//         type:String,
//         required:true,
//         minLength:[10,"number Must contain  10"],
//         maxLength:[10,"number Must contain  10"]
//     },
//     time:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:String,
//         required:true
//     },
// })

// export const Reservation=mongoose.model('Reservation',reservationSchema)

// const reservationSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: [true, "First name is required"],
//         minLength: [3, "First name must be at least 3 characters"],
//         maxLength: [15, "First name must be at most 15 characters"]
//     },
//     lastname: {
//         type: String,
//         required: [true, "Last name is required"],
//         minLength: [3, "Last name must be at least 3 characters"],
//         maxLength: [15, "Last name must be at most 15 characters"]
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         validate: {
//             validator: validator.isEmail,
//             message: "Provide a valid email!"
//         }
//     },
//     phone: {
//         type: String,
//         required: [true, "Phone number is required"]
//     },
//     time: {
//         type: String,
//         required: [true, "Time is required"]
//     },
//     date: {
//         type: String,
//         required: [true, "Date is required"]
//     }
// });

// // Correctly define the model
// export const Reservation = mongoose.model("Reservation", reservationSchema);


// const reservationSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to user
//     firstname: {
//         type: String,
//         required: [true, "First name is required"],
//         minLength: [3, "First name must be at least 3 characters"],
//         maxLength: [15, "First name must be at most 15 characters"]
//     },
//     lastname: {
//         type: String,
//         required: [true, "Last name is required"],
//         minLength: [3, "Last name must be at least 3 characters"],
//         maxLength: [15, "Last name must be at most 15 characters"]
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         validate: {
//             validator: validator.isEmail,
//             message: "Provide a valid email!"
//         }
//     },
//     phone: {
//         type: String,
//         required: [true, "Phone number is required"]
//     },
//     time: {
//         type: String,
//         required: [true, "Time is required"]
//     },
//     date: {
//         type: String,
//         required: [true, "Date is required"]
//     }
// });

// export const Reservation = mongoose.model("Reservation", reservationSchema);

const reservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to user
    firstname: {
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [15, "First name must be at most 15 characters"]
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [15, "Last name must be at most 15 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validator.isEmail,
            message: "Provide a valid email!"
        }
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    status: {
        type: String,
        enum: ["Waiting for verification", "Verified", "Rejected"],
        default: "Waiting for verification"
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
