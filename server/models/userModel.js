import mongoose from "mongoose";

let Schema;
let Model;
let userSchema;

Schema = mongoose.Schema;

userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

Model = mongoose.Model("User", userSchema);

export default Model;