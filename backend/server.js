import { app } from './app.js';
import colors from 'colors';
import dotenv from 'dotenv';
import { connectDB } from './Database/db.js';

connectDB();
dotenv.config();
app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server is running on PORT ${process.env.PORT}`.yellow.bold);
})
