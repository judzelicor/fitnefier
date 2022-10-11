import jwt from "jsonwebtoken";

export function validateUsername(username) {
    const usernameRegex = /^(?=[a-zA-Z._]{8,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    return Boolean(username.match(usernameRegex));
    
}

export function createUserToken(id) {
    console.log(id, "token create id")
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}