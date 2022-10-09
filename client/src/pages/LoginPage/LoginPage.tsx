import { useState } from "react";
import {
    Base
} from "../../layouts";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import axios from "axios";
import { useUser } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginPage() {
    useUser();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm({
        userEmail: "",
        userPassword: ""
    });

    const handleSubmit = (event: Event) => {
        const errors: { [key: string]: string } = {}

        event.preventDefault();

        if (!form.values.userEmail || !form.values.userPassword) {
            errors["missingFields"] = "All fields are required to log in."
        }

        form.raiseError(errors);

        for (let i in errors) return false;

        // Send the request to the server if client-side validation is successfull
        
        axios({
            method: "POST",
            url: "/api/v1/user/login",
            data: form.values
        })
        .then(result => {
            const user = result.data;
            console.log(user, "sdsdf")
            dispatch({ type: "LOGIN_USER", payload: user});
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/home")
        })
    }

    return (
        <Base documentTitle={ "Login | Fitnefier" }>
            <form className={ "loginForm__pVy5" }>
                <div>
                    <label className={ "formLabel__pVy5" }>Email address or username</label>
                    <input
                        value={ form.values.userEmail }
                        type={ "email" }
                        placeholder={ "Your email address or username" } 
                        onChange={(event) => form.handleFormChanges("userEmail", event.target.value)}
                    />
                </div>
                <div>
                    <label className={ "formLabel__pVy5" }>Password</label>
                    <input
                        value={ form.values.userPassword }
                        type={ "password" }
                        placeholder={ "Password" } 
                        onChange={(event) => form.handleFormChanges("userPassword", event.target.value) }
                    />
                </div>
                <div>
                    <button 
                        className={ "loginButton__pVy5" }
                        onClick={ handleSubmit }
                    >
                        Log in
                    </button>
                </div>
            </form>
            <div>
                <p>Don't have an account?</p>
                <Link to={ "/signup" }>Sign up for free</Link>
            </div>
        </Base>
    )
}

export default LoginPage;