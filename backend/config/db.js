import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Connecting to:", `${process.env.MONGODB_URI}/food_delivery`);
        await mongoose.connect(`${process.env.MONGODB_URI}/food_delivery`);
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        throw error; // This will show the actual error in Vercel logs
    }
}
