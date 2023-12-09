import express from 'express';
import userRoute from './Routes/userRoutes.js';


export const app = express();
app.use(express.json());

// Routes
app.use("/api/v1", userRoute);

app.get("/", (req, res)=>{
    res.send("Server is Live");
})