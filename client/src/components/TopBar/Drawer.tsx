import { Link } from "react-router-dom";

function Drawer() {
    return (
        <>
            <div className={ "floatingDrawer__lK8y" }>
                <nav>
                    <ul className={ "drawerMenuList__lK8y" }>
                        <li>
                            <Link className={ "drawerMenuLink__lK8y" } to={ "/" }>Home</Link>
                        </li>
                        <li>
                            <Link className={ "drawerMenuLink__lK8y" } to={ "/trending" }>Trending</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Drawer;