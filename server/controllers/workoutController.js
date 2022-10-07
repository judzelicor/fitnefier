import { WorkoutModel } from "../models/index.js";
import mongoose from "mongoose";


export async function fetchWorkouts(request, response) {
    let workouts;

    workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

    response.status(200).json(workouts);
}


export async function fetchWorkout(request, response) {
    let workout;

    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ message: "We could not find this workout." })
    }

    workout = await WorkoutModel.findOne({ _id: id });

    if (!workout) {
        return response.status(200).json({ message: "We could not find this workout." })
    }

    response.json({ workout });
}


export async function createWorkout(request, response) {
    let workout;

    const {
        exercise,
        repititions,
        duration
    } = request.body;

    try {
        workout = await WorkoutModel.create({
            exercise,
            repititions,
            duration
        });

        response.status(200).json(workout);
    }

    catch(error) {
        response.status(400).json({ error: error.message });
    }

}


export async function deleteWorkout(request, response) {
    let workout;

    const { id } = request.params;

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ message: "We could not find this workout." })
    }

    workout = await WorkoutModel.deleteOne({ _id: id });

    if (!workout) {
        return response.status(200).json({ message: "Successfully deleted workout." })
    }

    response.json({ message: "Successfully deleted workout."});
}


export async function updateWorkout(request, response) {
    let updates;
    let workout;

    const { id } = request.params;

    updates = request.body;

    workout = await WorkoutModel.findByIdAndUpdate(id, { ...updates });

    if (!workout) {
        return response.status(404).json({ message: "There was an error while performing the update." });
    }

    response.json({ message: "Successfully updated the workout." });
}


export async function deleteWorkouts(request, response) {
    await WorkoutModel.deleteMany({});

    response.status(200).json({ message: "successfully deleted all stored workouts." })
}