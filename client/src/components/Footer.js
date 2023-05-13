import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Footer(props) {

    return (

        <footer>
            <nav>
                <a href="https://www.linkedin.com/in/ryan-floersch-295993156/">
                    <img src="/icons8-linkedin-50.png" alt="Linkedin Logo" />
                </a>
                <a href="https://github.com/RyanmFloersch">
                    <img src="/icons8-github-50.png" alt="Linkedin Logo" />
                </a>

            </nav>

        </footer>

    );
}

export default Footer;