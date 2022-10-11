import jwt from "jsonwebtoken";
import { UserModel } from "../models/index.js";

async function verifyUser(request, response, next) {
    let jwtToken;

    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ error: "Authorization token required." });
    }

    jwtToken = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(jwtToken, process.env.JWT_SECRET);

        request.user = await UserModel.findOne({ id }).select('id');
        console.log(request.user)
        next();
    }
    
    catch(error) {
        response.status(401).json({ error: "You have no right to access this resource." });
    }
}

export default verifyUser;