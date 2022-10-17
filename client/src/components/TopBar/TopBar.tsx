import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./TopBar.css";
import { useDispatch, useSelector } from "react-redux";

function TopBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        const userState = state.user;

        for (let i in userState) {
            return userState;
        }

        return false
    });

    const [drawerIsVisible, setDrawerIsVisible] = useState(false);

    const toggleDrawerVisibility = () => {
        setDrawerIsVisible(!drawerIsVisible);
    };

    const logoutUser = () => {
        dispatch({ type: "LOGOUT_USER" });
        dispatch({ type: "FLUSH_USER_WORKOUTS" });
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <>
            <header>
                <div className={ "mainMenu__lK8y" }>
                    <div className={ "topbarWrapper__lK8y" }>
                        <div className={ "topbarLogoContainer__lK8y" }>
                            <Link to={ "/" }>
                                <Logo />
                            </Link>
                        </div>
                        <div className={ "topbarMainNavigationColumn__lK8y" }>
                            <nav className={ "topbarMainNavigation__lK8y" }>
                                <ul className={ "topbarMainmenuList__lK8y" }>
                                    <li>
                                        <Link className={ "topbarMenuLink__lK8y" }to={"/home"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className={ "topbarMenuLink__lK8y" } to={"/trending"}>Trending</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        { !user && (
                            <div className={ "topbarMainCTAs__lK8y" }>
                                <ul className={ "topBarCTAs__lK8y" }>
                                    <li className={ "buttonContainer__lK8y" }>
                                        <button
                                            className={"loginButton__jH7i"}
                                            onClick={() => navigate("/login")}
                                        >
                                            <span>Log in</span>
                                        </button>

                                    </li>
                                    <li>
                                        <button
                                            className={"signupButton__jH7i"}
                                            onClick={() => navigate("/signup")}
                                        >
                                            <span>Sign up</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <div className={ `drawer__lK8y ${ drawerIsVisible ? "visible" : "" }` }>
                <div className={ `drawerElement__lK8y` }>
                    <Drawer toggleDrawerVisibility={ toggleDrawerVisibility } />
                </div>
            </div>
            <button
                className={ "drawerToggler__lK8y" }
                onClick={ toggleDrawerVisibility }
            >
                <div>
                    <div className={ "drawerTogglerIcon__lK8y" }>
                        <svg viewBox="0 0 24 12">
                            <rect width="24" height="2"></rect>
                            <rect y="5" width="24" height="2"></rect>
                            <rect y="10" width="24" height="2"></rect>
                        </svg>
                    </div>
                </div>
            </button>
        </>
    )
}

export default TopBar;