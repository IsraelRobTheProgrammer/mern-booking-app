import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/BookingApp");
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("We are disconnected!");
});

//Middleware
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Connected to backend on http://localhost:8000/ ");
});
