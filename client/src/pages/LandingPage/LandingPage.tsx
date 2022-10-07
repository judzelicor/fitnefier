import {
    Base
} from "../../layouts";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <Base documentTitle={ "Fitnefier - Exercise Planner" }>
        </Base>
    )
}

export default LandingPage;