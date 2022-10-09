import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
    Base
} from "../../layouts";
import { useUser } from "../../hooks";

function HomePage() {
    useUser();

    const user = useSelector(state => state.user);

    return (
        <Base documentTitle={ "Dashboard | Fitnefier" }>
            <h1>Welcome back, { `${ user.firstName } ${ user.lastName }` }!</h1>
        </Base>
    )
}

export default HomePage;