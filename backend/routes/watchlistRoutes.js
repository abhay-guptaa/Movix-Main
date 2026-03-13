import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addWatchlist, getWatchlist, deleteWatchlist } from "../controllers/watchlistController.js";

const router = express.Router();

router.post("/add", protect, addWatchlist);
router.get("/", protect, getWatchlist);
router.delete("/:movieId", protect, deleteWatchlist);

export default router;