import mongoose from "mongoose"

export const dbconnection=()=>{
    mongoose
        .connect(process.env.MONGO_URL,{
            dbName:"RESTAURANT",
        })
        .then(()=>{
            console.log("Data base connected succesfully")
        })
        .catch((err)=>{
            console.log(`error Ocuured ${err}`)
        })
}