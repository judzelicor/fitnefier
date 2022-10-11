import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
    Base
} from "../../layouts";
import { useUser } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { WorkoutForm } from "../../components";

function HomePage() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserWorkouts = () => {
            axios({
                method: "GET",
                url: "/api/v1/workouts",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${ user.token }`
                }
            })
            .then(result => {})
            .catch(error => {
                if (error) {
                    navigate("/");

                }
            })
        }

        fetchUserWorkouts();

    }, [])

    return (
        <Base documentTitle={ "Dashboard | Fitnefier" }>
            <h1>Welcome back, { `${ user.firstName } ${ user.lastName }` }!</h1>
            <div className={ "workouts" }></div>
            <div className={ "workoutForm" }>
                <WorkoutForm />
            </div>
        </Base>
    )
}

export default HomePage;