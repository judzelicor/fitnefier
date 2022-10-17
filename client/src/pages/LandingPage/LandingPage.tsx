import {
    Base
} from "../../layouts";
import "./LandingPage.css";
import { 
    Footer, 
    TopBar 
} from "../../components";

function LandingPage() {
    return (
        <Base documentTitle={ "Fitnefier - Exercise Planner" }>
            <TopBar />
            <Footer />
        </Base>
    )
}

export default LandingPage;