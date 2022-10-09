import {
    UserModel
} from "../models/index.js";

export async function login(request, response) {
    let user;
    let validUser;
    let token;
    let email;
    let password;
    let result;

    const credentials = request.body;

    email = credentials.userEmail;
    password = credentials.userPassword;

    try {
        validUser = await UserModel.login(email, password);
    }

    catch(error) {
        return response.status(400).json({ message: error.message });
    }

    user = validUser.user;
    token = validUser.token;

    result = { ...user, token }

    response.status(200).json(result)
}

export async function signup(request, response) {
    let user;
    let result;

    const credentials = request.body;

    try {
        // Validate user sign up credentials
        user = await UserModel.validateSignupCredentials(credentials);
        
    } catch(error) {
        if (error) {
            return response.status(400).json({ message: error.message })

        }
    }


    // Register user after successful validation
    try {
        result = await UserModel.signup(credentials);

    }
    
    catch(error) {
        if (error) {
            return response.status(400).json({ message: error.message })
        }
    }

    response.status(200).json({ ...result });
}