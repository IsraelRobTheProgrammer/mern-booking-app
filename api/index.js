import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("We are disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("We are connected!");
});

app.listen(8000, () => {
  connect();
  console.log("Connected to backend ");
});
