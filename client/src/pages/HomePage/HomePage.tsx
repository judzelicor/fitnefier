import { useEffect } from "react";
import axios from "axios";
import {
    Base
} from "../../layouts";

function HomePage() {
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await axios({
                method: "GET",
                url: "/workouts"
            });
        }
    }, []);

    return (
        <Base documentTitle={ "Dashboard | Fitnefier" }>
            <h1>Welcome back, Sylvester!</h1>
        </Base>
    )
}

export default HomePage;