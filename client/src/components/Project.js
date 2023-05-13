
import { NavLink } from "react-router-dom";



function Project(props) {


    return (
        <>
            <div className='portfolio-container'>
                <div className='portfolio-item'>
                    <a href={props.urlLink} target='_blank' rel='noreferrer'>
                        <img src={props.image} alt={props.alt} />
                    </a>
                    <p>{props.project}</p>
                </div>
            </div>

        </>
    );
}

export default Project;