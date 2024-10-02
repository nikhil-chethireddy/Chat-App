import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", protectRoute, getUsers);

export default userRouter;
