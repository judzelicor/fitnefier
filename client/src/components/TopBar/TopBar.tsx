import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import "./TopBar.css";

function TopBar() {
    const navigate = useNavigate();

    const [drawerIsVisible, setDrawerIsVisible] = useState(false);

    const toggleDrawerVisibility = () => {
        setDrawerIsVisible(!drawerIsVisible);
    };

    return (
        <>
            <header>
                <div className={ "mainMenu__lK8y" }>
                    <div className={ "topbarWrapper__lK8y" }>
                        <nav>
                            <ul className={ "topbarMainmenuList__lK8y" }>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/trending"}>Trending</Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <ul className={ "topBarCTAs__lK8y" }>
                                <li>
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
                    </div>
                </div>
            </header>
            <div className={ "drawer__lK8y" }>
                <div className={ `drawerElement__lK8y ${ drawerIsVisible ? "visible" : "" }` }>
                    <Drawer />
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
            </div>
        </>
    )
}

export default TopBar;