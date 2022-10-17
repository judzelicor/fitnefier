import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useUser } from "../../hooks";

function Drawer({ toggleDrawerVisibility }: { toggleDrawerVisibility: () => void }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => {
        const userState = state.user;

        for (let i in userState) {
            return userState;
        }

        return false
    });

    const redirect = (location: string) => {
        toggleDrawerVisibility();
        navigate(location);
    }

    const logout = () => {
        dispatch({ type: "LOGOUT_USER" });
        dispatch({ type: "FLUSH_USER_WORKOUTS" });
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <>
            <div className={"floatingDrawer__lK8y"}>
                <div className={"floatingDrawerWrapper__lK8y"}>
                    <div>
                        <div className={"floatingDrawerLogoContainer__lK8y"}>
                            <div
                                className={"floatingDrawerLogoWrapper__lK8y"}
                                onClick={() => redirect("/")}
                            >
                                <Link to={"/"}>
                                    <Logo />
                                </Link>
                            </div>
                        </div>
                        <nav>
                            <ul className={"drawerMenuList__lK8y"}>
                                <li>
                                    <div
                                        onClick={() => redirect("/home")}
                                    >
                                        <Link className={"drawerMenuLink__lK8y"} to={"/home"}>Home</Link>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => redirect("/trending")}
                                    >
                                        <Link className={"drawerMenuLink__lK8y"} to={"/trending"}>Trending</Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {!user && (
                        <>
                            <div className={"floatingDrawerCTAsContainer__lK8y"}>
                                <ul className={"floatingDrawerCTAs__lK8y"}>
                                    <li className={"buttonContainer__lK8y"}>
                                        <button
                                            className={"loginButton__lK8y"}
                                            onClick={() => redirect("/login")}
                                        >
                                            <span>Log in</span>
                                        </button>
                                    </li>
                                    <li className={"buttonContainer__lK8y"}>
                                        <button
                                            className={"signupButton__lK8y"}
                                            onClick={() => redirect("/signup")}
                                        >
                                            <span>Sign up</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    {
                        user && (
                            <div>
                                <ul>
                                    <li>
                                        <button className={ "logoutButton__lK8y" } onClick={ logout }>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Drawer;