import dotenv from "dotenv";

dotenv.config({
    path: resolve(".env.local")
});

import express from "express";
import { resolve } from "path";
import {
    workoutRoutes,
    userRoutes
} from "./routes/index.js";

import { mongodb } from "./database/index.js";

import {
    errorHandlerMiddleware,
    verifyUser
} from "./middlewares/index.js";

let server;
let port;

server = express();
port = process.env.PORT;

// Allow JSON data to be read from the request's body
server.use(express.json());

server.use("/api/v1/workouts", workoutRoutes);
server.use("/api/v1/user", userRoutes);

// Handle route errors
server.use(errorHandlerMiddleware);

mongodb.connect(() => {
    server.listen(port, () => {
        console.log(`The Kinico server is listening on port: ${ port }.`);
    });
});
