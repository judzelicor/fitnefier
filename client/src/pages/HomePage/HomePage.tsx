import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    Base
} from "../../layouts";
import { useUser } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { WorkoutForm } from "../../components";

function HomePage() {
    const user = useUser();
    const workouts = useSelector(state => state.userWorkouts)
    const dispatch = useDispatch();
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
            .then(result => {
                const _workouts = result.data

                dispatch({ type: "FETCHED_USER_WORKOUTS", payload: _workouts })
            })
            .catch(error => {
                if (error) {
                    navigate("/");

                }
            })
        }

        fetchUserWorkouts();

    }, [])

    console.log(workouts)

    return (
        <Base documentTitle={ "Dashboard | Fitnefier" }>
            <h1>Welcome back, { `${ user.firstName } ${ user.lastName }` }!</h1>
            <div className={ "workouts" }>
                <ul>
                    {
                        workouts.map(workout => {
                            return (
                                <li>{ workout.exercise }</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={ "workoutForm" }>
                <WorkoutForm />
            </div>
        </Base>
    )
}

export default HomePage;