import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";
const router = express.Router();

// CREATE HOTEL
router.post("/", createHotel);

// UPDATE HOTEL
router.put("/:id", updateHotel);

// DELETE HOTEL
router.delete("/:id", deleteHotel);

// GET ONE HOTEL
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
