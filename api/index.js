import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/real-estate")
  //   .connect
  // "mongodb+srv://admin:admin@cluster0.3dhqvsx.mongodb.net/real-estate-backend"
  //   ()
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("hey");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
