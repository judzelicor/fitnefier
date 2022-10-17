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
import {Footer, InputErrorMessage, TopBar} from "../../components";
import { validateEmail } from "../../utils";

function LoginPage() {
    useUser();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState("");

    const form = useForm({
        userEmail: "",
        userPassword: ""
    });

    const handleSubmit = (event: Event) => {
        let loginErrorMessage;
        let errors: { [key: string]: string } = {}

        event.preventDefault();

        if (!form.values.userEmail || !form.values.userPassword) {
            errors["missingFields"] = "All fields are required to log in."
        }

        else if (!validateEmail(form.values.userEmail)) {
            errors["userEmail"] = "The email address you entered in invalid.";
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
            console.log(user)

            dispatch({ type: "LOGIN_USER", payload: user});
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/home")

        }).catch(error => {
            if (error) {
                loginErrorMessage = error.response.data.message;
                form.raiseError({"loginError": loginErrorMessage});
            }
        })
        
    }

    return (
        <Base documentTitle={ "Login | Fitnefier" }>
            <div className={ "loginPageContent__pVy5" }>
                <div>
                    <TopBar />
                </div>
                <div className={ "loginForm__pVy5" }>
                    <div className={ "loginPageContentHeader__pVy5" }>
                        <h2 className={ "pageTitle__pVy5" }>Login</h2>
                        <div className={ "signupPrompt__pVy5" }>
                            <p>New to Fitnefier? <Link className={ "signupLink__pVy5" } to={ "/signup" }>Sign up for free</Link></p>
                        </div>
                    </div>
                    <div className={ "formErrors__pVy5" }>
                        <>{ form.errors["loginError"] && <InputErrorMessage message={ form.errors["loginError"] } /> }</>
                        <>{ form.errors["missingFields"] && <InputErrorMessage message={ form.errors["missingFields"] } /> }</>
                    </div>
                    <form className={ "loginForm__pVy5" }>
                        <div className={ "formGroup__pVy5" }>
                            <label className={ "formLabel__pVy5" }>Email address or username</label>
                            <input
                                className={ "formInput__pVy5" }
                                value={ form.values.userEmail }
                                type={ "email" }
                                placeholder={ "Your email address or username" }
                                onChange={(event) => form.handleFormChanges("userEmail", event.target.value)}
                            />
                            <>{ form.errors["userEmail"] && <InputErrorMessage message={ form.errors["userEmail"] } /> }</>
                        </div>
                        <div className={ "formGroup__pVy5" }>
                            <label className={ "formLabel__pVy5" }>Password</label>
                            <input
                                className={ "formInput__pVy5" }
                                value={ form.values.userPassword }
                                type={ "password" }
                                placeholder={ "Password" }
                                onChange={(event) => form.handleFormChanges("userPassword", event.target.value) }
                            />
                        </div>
                        <div className={ "formGroup__pVy5" }>
                            <button
                                className={ "loginButton__pVy5" }
                                onClick={ handleSubmit }
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </Base>
    )
}

export default LoginPage;