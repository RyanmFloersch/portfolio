import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Footer(props) {

    return (

        <footer className=" mt-auto w-full  p-1 bg-emerald-200 ">
            <div className = "w-full max-w-screen-xs mx-auto md:py-4 p-2 ">
                <div className="sm:flex sm:items-center sm:justify-evenly ">
                    <a href="https://www.linkedin.com/in/ryan-floersch-295993156/" className="flex items-center mb-4 sm:mb-0">
                        <img src="/icons8-linkedin-50.png" className="md:h-9 h-5 " alt="Linkedin Logo" />
                        <span className="self-center md:text-2xl text-2sm font-semibold whitespace-nowrap ">Linkedin</span>
                    </a>
                    <a href="https://github.com/RyanmFloersch" className="flex items-center mb-4 sm:mb-0">
                        <img src="/icons8-github-50.png" className="md:h-9 h-5"  alt="Linkedin Logo" />
                        <span className="self-center md:text-2xl text-2sm font-semibold whitespace-nowrap ">Github</span>
                    </a>                    
                </div>                
                <hr className="lg:my-3 my-0 border-gray-200 sm:mx-auto border-gray-700 "/>
            </div>
            
        </footer>

    );
}

export default Footer;