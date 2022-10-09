import {
    Base
} from "../../layouts";
import "./LandingPage.css";
import { useUser } from "../../hooks";

function LandingPage() {
    useUser();
    
    return (
        <Base documentTitle={ "Fitnefier - Exercise Planner" }>
        </Base>
    )
}

export default LandingPage;