import express from "express";
import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/users.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../middlewares/tokenAuth.js";
const router = express.Router();


// UPDATE USER
router.put("/:id", verifyUser, updateUser);

// DELETE USER
router.delete("/:id", verifyUser, deleteUser);

// GET ONE USER
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
