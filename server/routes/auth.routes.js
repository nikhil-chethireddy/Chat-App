import express from "express";
import { signUp, login, logout } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter
  .post("/signup", signUp)
  .post("/login", login)
  .post("/logout", logout);

export default authRouter;
