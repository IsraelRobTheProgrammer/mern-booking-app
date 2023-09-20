import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  getRoom,
  updateRoom,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../middlewares/tokenAuth.js";
const router = express.Router();

// CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);

// DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET ONE ROOM
router.get("/:id", getRoom);

// GET ALL
router.get("/", getRooms);

export default router;
