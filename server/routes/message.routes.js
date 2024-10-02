import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const messageRouter = express.Router();

messageRouter
  .post("/send/:id", protectRoute, sendMessage)
  .get("/:id", protectRoute, getMessage);

export default messageRouter;
