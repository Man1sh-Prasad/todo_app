import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const conncectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); 

        console.log(`\n MongoDB CONNECTED !! DB HOST: ${conncectionInstance.connection.host}`);
    } catch(error) {
        console.log("MONGODB connection failed", error);
        process.exit(1)
    }
}

export default connectDB;     