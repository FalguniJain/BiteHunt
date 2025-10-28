import mongoose from "mongoose";


export const connectDB = async () => {
    // Read the URI from an environment variable
    await mongoose.connect(`${process.env.MONGODB_URI}/food_delivery`)
        .then(() => console.log("DB connected"));
}
