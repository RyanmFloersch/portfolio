
import { NavLink } from "react-router-dom";

import 'flowbite';

function Navigation() {


    return (
        <div className="flex md:flex-row flex-col md:justify-start   ">
            <div className="flex flex-row justify-between items-center px-2   ">

                <h1 className="tracking-widest hover:underline underline-offset-2 decoration-emerald-700 text-emerald-200" >Ryan Floersch</h1>
                {/* drop down menu button and svg image for the buttons icon */}
                <button data-collapse-toggle="navbar-default" type="button" className="  inline-flex w-10 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg bg-emerald-200 md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 my-3 " aria-controls="navbar-default" area-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

                </button>
            </div>

            {/* navbar container and  Box for the drop down menu */}
            <div className="hidden  items-center w-full md:block md:w-auto  md:bg-transparent bg-slate-800 " id="navbar-default">
                {/* list of navbar elements and List of drop down menu items */}
                <ul className="font-medium  flex flex-col justify-start  md:p-0 md:ml-8 md:bg-transparent bg-neutral-500 border border-gray-100 md:divide-none divide-y   md:flex-row md:space-x-8 mt-0 md:border-0   ">
                    <NavLink className={"block text-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} to="/">About Me</NavLink>
                    {/* <NavLink className={"block text-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} to="/portfolio">Portfolio</NavLink> */}
                    {/* <NavLink className={"block text-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} to="/contact">Contact</NavLink> */}
                    <a href="mailto: ryanmichaelfloersch@gmail.com" className="block text-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    <NavLink className={"block text-black py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} to="/resume">Resume</NavLink>
                </ul>
            </div>

        </div>
    );
}

export default Navigation;
