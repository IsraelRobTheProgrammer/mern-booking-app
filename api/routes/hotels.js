import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../middlewares/tokenAuth.js";
const router = express.Router();

// CREATE HOTEL
router.post("/", verifyAdmin, createHotel);

// UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);

// DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);

// GET ONE HOTEL
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

export default router;
