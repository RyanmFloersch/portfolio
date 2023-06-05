
import { NavLink } from "react-router-dom";



function CarouselProjectItem(props) {



    return (
        <>
            <div className='flex flex-col text-emerald-200 p-14'>
                <h1 className="mx-auto mb-5">{props.projectName}</h1>
                <div className='flex md:flex-row flex-col   gap-5 '   >
                    <a href={props.urlLink} className="relative group md:block hidden w-1/2 h-1/2  z-10  lg:mt-0 sm:mt-7" target='_blank' rel='noreferrer'>
                            <img className="  rounded z-20" src={props.image} alt={props.alt} />

                            <svg className=" absolute  inset-y-0 left-0  w-full h-full group-hover:visible  group-hover:bg-white/20 invisible  z-30" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" />
                            </svg>

                    </a>

                    <p className="md:text-base md:w-1/2 text-xs items-center md:mt-7  mx-auto rounded ">{props.project}</p>
                    <button className="md:hidden visible bg-emerald-800 mx-auto rounded w-1/2 ">Visit</button>

                </div>
            </div>

        </>
    );
}

export default CarouselProjectItem;