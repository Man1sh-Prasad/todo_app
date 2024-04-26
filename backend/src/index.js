import { app } from "./app.js";
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from "url";
import path from 'path';
import connectDB from "./db/db.index.js";



// get the directory path 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

//Construct the absolute path to the .env file
const envPath = path.resolve(__dirname, '../../.env');

// Load environment variables from the .env file
dotenv.config({
    path: envPath 
});

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log('ERROR while listening', error);
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('MONGO DB connection failed !!', err);
})
