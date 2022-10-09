import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function Drawer({ toggleDrawerVisibility }: { toggleDrawerVisibility: () => void }) {
    const navigate = useNavigate();

    const redirect = (location: string) => {
        toggleDrawerVisibility();
        navigate(location);
    }

    return (
        <>
            <div className={ "floatingDrawer__lK8y" }>
                <div className={ "floatingDrawerWrapper__lK8y" }>
                    <div>
                        <div className={ "floatingDrawerLogoContainer__lK8y" }>
                            <div
                                className={ "floatingDrawerLogoWrapper__lK8y" }
                                onClick={ () => redirect("/")}
                            >
                                <Link to={ "/" }>
                                    <Logo />
                                </Link>
                            </div>
                        </div>
                        <nav>
                            <ul className={ "drawerMenuList__lK8y" }>
                                <li>
                                    <div
                                        onClick={ () => redirect("/home")}
                                    >
                                        <Link className={ "drawerMenuLink__lK8y" } to={ "/home" }>Home</Link>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => redirect("/trending")}
                                    >
                                        <Link className={ "drawerMenuLink__lK8y" } to={ "/trending" }>Trending</Link>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={ "floatingDrawerCTAsContainer__lK8y" }>
                        <ul className={ "floatingDrawerCTAs__lK8y" }>
                            <li className={ "buttonContainer__lK8y" }>
                                <button 
                                    className={"loginButton__lK8y"}
                                    onClick={() => redirect("login")}
                                >
                                    <span>Log in</span>
                                </button>
                            </li>
                            <li className={ "buttonContainer__lK8y" }>
                                <button 
                                    className={"signupButton__lK8y"}
                                    onClick={() => redirect("signup")}
                                >
                                    <span>Sign up</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer;