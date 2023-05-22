import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Footer(props) {

    return (

        <footer className=" mt-auto w-full  p-4 bg-emerald-200 ">
            <div className = "w-full max-w-screen-xs mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-evenly ">
                    <a href="https://www.linkedin.com/in/ryan-floersch-295993156/" className="flex items-center mb-4 sm:mb-0">
                        <img src="/icons8-linkedin-50.png" className="h-9" alt="Linkedin Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Linkedin</span>
                    </a>
                    <a href="https://github.com/RyanmFloersch" className="flex items-center mb-4 sm:mb-0">
                        <img src="/icons8-github-50.png" className="h-9"  alt="Linkedin Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Github</span>
                    </a>                    
                </div>                
                <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8"/>
            </div>
            
        </footer>

    );
}

export default Footer;