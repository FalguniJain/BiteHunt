import mongoose from "mongoose";

export  const connectDB = async () => {
    await mongoose.connect('mongodb+srv://falgunijain2812_db_user:123456578@cluster0.ek3irvp.mongodb.net/food_delivery').then(()=>console.log("DB connected"));   
}