
import { NavLink } from "react-router-dom";



function Project(props) {


    return (
        <>
            <div className='flex flex-col p-5 m-10 w-10/12 h-1/2 rounded text-emerald-200'>
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    <a href={props.urlLink} className=" m-4" target='_blank' rel='noreferrer'>
                        <img className="rounded" src={props.image} alt={props.alt} />
                    </a>
                    <p className="m-4 p-3 rounded ">{props.project}</p>
                </div>
            </div>

        </>
    );
}

export default Project;