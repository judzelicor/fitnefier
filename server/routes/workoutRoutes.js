import express from "express";
import {
    fetchWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout,
    fetchWorkout,
    deleteWorkouts
} from "../controllers/index.js";

let router;

router = express.Router();

router.get("/", fetchWorkouts);
router.delete("/", deleteWorkouts);
router.delete("/:id", deleteWorkout);
router.post("/", createWorkout);
router.get("/:id", fetchWorkout);
router.patch("/:id", updateWorkout);

export default router;