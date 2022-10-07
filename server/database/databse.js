import mongoose from "mongoose";

class MongoDB {
    constructor() {
        this.mongoose = mongoose;
        this.mongodb_database_uri = process.env.MONGODB_DATABASE_URI;
    }

    connect(callback) {
        console.log(this.mongodb_database_uri, "uri")
        this.mongoose.connect(process.env.MONGODB_DATABASE_URI)
        .then(() => {
            callback();
        })
        .catch(error => {
            if (error) {
                console.log(error);
            }
        })
    }
}

const mongodb = new MongoDB();

export default mongodb;