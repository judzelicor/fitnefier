import {
    Base
} from "../../layouts" ;
import { Link } from "react-router-dom";
import {
    useForm
} from "../../hooks";
import {
    validateEmail,
    validatePassword,
    login,
    validateFirstName,
    validateLastName,
    validateUsername
} from "../../utils";
import "./SignupPage.css";
import {
    Footer,
    InputErrorMessage, TopBar
} from "../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userConfirmedEmail: "",
        userPassword: "",
        userConfirmedPassword: "",
        userUsername: ""
    });

    const handleInputChange = (type: string, value: string) => {
        form.handleFormChanges(type, value);

    }

    const handleSubmit = (event: Event) => {
        const errors: {[key: string]: string} = {};

        event.preventDefault();

        if (!form.values.userFirstName || !form.values.userLastName) {
            errors["missingFields"] = "All fields are required to create an account.";

        } else {

            if (!validateFirstName(form.values.userFirstName)) {
                errors["userFirstName"] = "Your first name contains invalid characters.";
            }
    
            if (!validateLastName(form.values.userLastName)) {
                errors["userLastName"] = "Your last name contains invalid characters";
            }
    
            if (!validateEmail(form.values.userEmail)) {
                errors["userEmail"] = "The email you provided is invalid."
                
            }
            
            if (!validatePassword(form.values.userPassword)) {
                errors["userPassword"] = "The password you provided is not strong enough."
                
            }

            if (form.values.userPassword !== form.values.userConfirmedPassword) {
                errors["userConfirmedPassword"] = "Your password does not match."
            }
    
            if (form.values.userEmail !== form.values.userConfirmedEmail) {
                errors["userConfirmedEmail"] = "Your email address does not match."
            }

            if (!validateUsername(form.values.userUsername)) {
                errors["userUsername"] = "The username you provided is invalid."
            }

        }

        form.raiseError(errors);

        // Make the request when there are no more errors
        for (let i in errors) return false;

        login(form.values)
            .then(response => {
                if (response.success) {
                    dispatch({ type: "USER_SIGNED_UP", payload: response.user });
                    navigate("/home");
                } else {
                    console.log(response)
                }
            })
        
    }
    
    return (
        <Base documentTitle={ "Sign up | Fitnefier" }>
            <div className={ "signupPageContent__7hVE" }>
                <TopBar />
                <div className={ "signupFormWrapper__7hVE" }>

                    <div className={ "signupPageFormHeader__7hVE" }>
                        <h2 className={ "pageTitle__7hVE" }>Signup</h2>
                        <div className={ "loginPrompt__7hVE" }>
                            <p>Already have an account? <Link className={ "loginLink__7hVE" } to={ "/login" }>Log in</Link></p>
                        </div>
                    </div>
                        
                    <form className={ "signupForm__7hVE" }>
                        <div>
                            <div>{ form.errors["missingFields"] && <InputErrorMessage message={ form.errors["missingFields"] } /> }</div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>What's your first name?</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userFirstName }
                                    type={ "text" } 
                                    placeholder={ "Enter your first name" }
                                    onChange={ (event) =>  form.handleFormChanges("userFirstName", event.target.value) }
                                />
                                <div>{ form.errors["userFirstName"] && <InputErrorMessage message={ form.errors["userFirstName"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>What's your last name?</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userLastName }
                                    type={ "text" } 
                                    placeholder={ "Enter your last name" }
                                    onChange={ (event) =>  form.handleFormChanges("userLastName", event.target.value) }
                                />
                                <div>{ form.errors["userLastName"] && <InputErrorMessage message={ form.errors["userLastName"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>What's your email</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userEmail }
                                    type={ "email" } 
                                    placeholder={ "Enter your email address" }
                                    onChange={ (event) => form.handleFormChanges("userEmail", event.target.value) }
                                />
                                <div>{ form.errors["userEmail"] && <InputErrorMessage message={ form.errors["userEmail"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>Confirm your email address</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userConfirmedEmail }
                                    type={ "email" } 
                                    placeholder={ "Enter your email address again" } 
                                    onChange={ (event) => form.handleFormChanges("userConfirmedEmail", event.target.value) }
                                />
                                <div>{ form.errors["userConfirmedEmail"] && <InputErrorMessage message={ form.errors["userConfirmedEmail"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>Create a password</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userPassword }
                                    type={ "password" }
                                    placeholder={ "Secure your account" } 
                                    onChange={ (event) => handleInputChange("userPassword", event.target.value) }
                                />
                                <div>{ form.errors["userPassword"] && <InputErrorMessage message={ form.errors["userPassword"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>Confirm your password</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userConfirmedPassword }
                                    type={ "password" } 
                                    placeholder={ "Enter your password again" }
                                    onChange={ (event) => form.handleFormChanges("userConfirmedPassword", event.target.value) }
                                />
                                <div>{ form.errors["userConfirmedPassword"] && <InputErrorMessage message={ form.errors["userConfirmedPassword"] } /> }</div>
                            </div>
                            <div className={ "signupFormGroup__7hVE" }>
                                <label className={ "formInputLabel__h7VE" }>How should we call you?</label>
                                <input
                                    className={ "formInput__h7VE" }
                                    value={ form.values.userUsername }
                                    type={ "text" } 
                                    placeholder={ "Enter a username" } 
                                    onChange={ (event) => form.handleFormChanges("userUsername", event.target.value) }
                                />
                                <div>{ form.errors["userUsername"] && <InputErrorMessage message={ form.errors["userUsername"] } /> }</div>
                            </div>
                            <div>
                                <button className={ "signupFormButton__h7VE" } onClick={ handleSubmit }>Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </Base>
    )
}

export default SignupPage;