import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header(props) {

    return (

        <header className=" bg-slate-700 w-full  ">
            
                {/* <div className="flex flex-wrap justify-start items-center  max-w-screen-xl p-4"> */}
                {/* <h1 className="sm:visible invisible">Ryan Floersch</h1> */}
                {/* <NavLink to="/"></NavLink> */}
                {/* </div> */}
                <Navigation />


        </header>

    );
}

export default Header;