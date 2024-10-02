import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
// import Razoray from "razorpay";
dotenv.config();

//  export const instance = new Razorpay(
//   {
//     key_id: process.env.Razorpay_key,
//     key_secret: process.env.Razorpay_secret,
//   }
// );

const app = express();

const port = process.env.PORT;

app.use(cors());

// using middlewares
app.use(express.json());
app.use("/uploads",express.static("uploads"))

app.get("/", (req, res) => {
  res.send("server is working ");
});

// importing routes

import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';

// using routes
app.use("/api",userRoutes);
app.use("/api",courseRoutes);
app.use("/api",adminRoutes);
app.listen(port, () => {
  console.log(`server is running ${port}`);
  connectDb();
});
