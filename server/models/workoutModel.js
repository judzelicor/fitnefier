import mongoose from "mongoose";

let Schema;
let Model;
let workoutSchema;

Schema = mongoose.Schema;

workoutSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },
    repititions: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, { timestamps: true });

Model = mongoose.model("Workout", workoutSchema);

export default Model;