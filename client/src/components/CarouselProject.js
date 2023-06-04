
import { NavLink } from "react-router-dom";



function CarouselProject(props) {

    

    return (
        <>
            <div className='flex flex-col text-emerald-200 p-14'>
                <h1 className="mx-auto mb-5">{props.projectName}</h1>
                <div className='flex md:flex-row flex-col   gap-5 '   >
                        <a  href={props.urlLink} className="md:block hidden w-1/2 h-1/2 backdrop-sepia  bg-white/30  mx-auto  " target='_blank' rel='noreferrer'>
                            <img className="rounded  "  src={props.image} alt={props.alt} />
                        </a>                        
                    <p className="md:text-base md:w-1/2 text-xs   mx-auto rounded ">{props.project}</p>
                    <button className="md:hidden visible bg-emerald-800 mx-auto rounded w-1/2 ">Visit</button>

                </div>
            </div>

        </>
    );
}

export default CarouselProject;