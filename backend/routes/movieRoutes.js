import express from "express";
import { getMovieDetails } from "../controllers/movieController.js";

const router = express.Router();

router.get("/:id", getMovieDetails);

export default router;