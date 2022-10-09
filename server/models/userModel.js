import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import { 
    validateUsername,
    createUserToken
} from "../utils/index.js";

let Schema;
let Model;
let userSchema;

Schema = mongoose.Schema;

userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function(credentials) {
    let user;
    let passwordSalt;
    let hashedPassword;
    let token;
    let email;
    let password;
    let newUser;

    email = credentials.userEmail;
    password = credentials.userPassword;

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email is already registered.");
    }

    passwordSalt = await bcrypt.genSalt(12);

    hashedPassword = await bcrypt.hash(password, passwordSalt);

    user = await this.create({
        firstName: credentials.userFirstName,
        lastName: credentials.userLastName,
        username: credentials.userUsername,
        email: credentials.userEmail, 
        password: hashedPassword
    });

    token = createUserToken(user._id)

    newUser = {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    }

    return { ...newUser, token };

};

userSchema.statics.validateSignupCredentials = (credentials) => {
    const firstName = credentials.userFirstName;
    const lastName = credentials.userLastName;
    const email = credentials.userEmail;
    const password = credentials.userPassword;
    const username = credentials.userUsername;

    if (!firstName || !lastName || !email || !password || !username) {
        throw Error("All fields are required to register an account.");

    }

    else if (!validateUsername(username) && !validator.isEmail(email) && !validator.isStrongPassword(password)) {
        throw Error("The email, username and password you provided are invalid.");

    }

    else if (!validator.isEmail(email) && !validator.isStrongPassword(password)) {
        throw Error("The email and password you provided is invalid");

    }

    else if (!validator.isStrongPassword(password) && !validateUsername(username)) {
        throw Error("The username and password your provided is invalid.");

    }

    else if (!validateUsername(username)) {
        throw Error("The username you provided is not valid.")
    }

    else if (!validator.isEmail(email)) {
        throw Error("The email you provided is invalid.");

    }

    else if (!validator.isStrongPassword(password)) {
        throw Error("The password you provided is not strong enough.");

    }

}

userSchema.statics.login = async function(email, password) {
    let user;
    let passwordIsAMatch;
    let token;

    if (!email || !password) {
        throw Error("All fields are required.");
    }

    user = await this.findOne({ email });

    if (!user) {
        throw Error("This user cannot be found.");
    }

    passwordIsAMatch = await bcrypt.compare(password, user.password);

    user = {
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    }
    
    if (!passwordIsAMatch) {
        throw Error("The password you provided is incorrect.");
    }

    token = createUserToken(user._id);

    return { user, token };

}

Model = mongoose.model("User", userSchema);

export default Model;