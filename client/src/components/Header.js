import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header(props) {

    return (

        <header className="  bg-emerald-200">
            <nav>
                <div className="flex flex-wrap justify-start items-center  max-w-screen-xl p-4">
                    <NavLink to="/"><span className="text-2xl font-bold whitespace-nowrap">Ryan Floersch</span></NavLink>
                </div>
            </nav>
            
            <Navigation />
            
        </header>

    );
}

export default Header;