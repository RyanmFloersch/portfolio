import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header(props) {

    return (

        <header className="sticky">
            <h1>Ryan Floersch</h1>
            <Navigation />
        </header>

    );
}

export default Header;