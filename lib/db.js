import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const mongoDBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URI);
        console.log('Database connected..');
    } catch (err) {
        console.error(err);
        process.exit(1); 
    }
}

export default mongoDBConnection;