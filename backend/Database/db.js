import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () =>{
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "TaskNinja",
      })
      .then((c) =>
        console.log(`Database Connected with ${c.connection.host}`.cyan.bold)
      )
      .catch((e) => console.log(e));
}
