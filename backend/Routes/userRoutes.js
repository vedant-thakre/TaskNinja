import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../Controller/userController.js";

const router = express.Router();

router
  .post("/createuser", createUser)
  .get("/getuser/:id", getUser)
  .get("/getAll", getAllUsers)
  .put("/updateuser/:id", updateUser)
  .delete("/deleteuser/:id", deleteUser);


export default router;