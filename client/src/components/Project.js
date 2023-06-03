
import { NavLink } from "react-router-dom";



function Project(props) {


    return (
        <>
            <div className='flex flex-col p-5 m-10 w-10/12 h-1/2 rounded  text-emerald-200'>
                <div className='grid lg:grid-cols-2 grid-cols-1 '>
                    {/* <div className=""> */}
                        <a  href={props.urlLink} className="  m-4" target='_blank' rel='noreferrer'>
                            {/* <img src="/location-pointer.png  absolute top-0 left-0 mt-32 ml-40" className="relative top-0" alt="" width='600'/> */}
                            <img className="rounded" src={props.image} alt={props.alt} />

                        </a>
                    {/* </div> */}
                    <p className="m-4 p-3 rounded ">{props.project}</p>
                </div>
            </div>

        </>
    );
}

export default Project;