import validator from "validator";
import axios from "axios";

export function validateEmail(email: string) {
    return validator.isEmail(email);
}

export function validatePassword(password: string) {
    return validator.isStrongPassword(password);
}

export function validateFirstName(firstName: string) {
    const nameRegex = /^[A-Za-z ]+$/;
    return firstName.match(nameRegex);
}

export function validateLastName(lastName: string) {
    const nameRegex = /^[A-Za-z ]+$/;
    return lastName.match(nameRegex);
}

export function validateUsername(username: string) {
    const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return username.match(usernameRegex);
}

export async function login(userCredentials: { [key: string]: string }) {
    const user = await axios({
        method: "POST",
        url: "/api/v1/user/signup",
        data: userCredentials
    }).then(result => {
        const response = result.data;

        localStorage.setItem("user", JSON.stringify(response));

        return { success: true, user: response };
    }).catch(error => {
        if (error) {
            console.log(error.response.data)
            return { success: false, message: error.response.data }
        }
    })

    return user;
}