import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From User Route");
});
export default router;
