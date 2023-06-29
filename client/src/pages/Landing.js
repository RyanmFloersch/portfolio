// import {useState, useEffect} from 'react';



// import Project from '../components/Project';

import ProjectCarousel from '../components/ProjectCarousel';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

import 'flowbite'
import { useEffect } from 'react';

function Landing(props) {


  
    return (
        <main className="flex flex-col text-emerald-200 w-screen h-full ">
            <div className=' flex flex-col w-screen h-1/4 align-center justify-center mb-5'>
                <About/>
            </div>
       

            <div className=' flex flex-col w-screen h-1/4 align-center justify-center bg-slate-700'>
                <ProjectCarousel />
            </div>

          
            <div className='w-screen h-1/4 align-center justify-center '>
                <Certifications/>
            </div>

            <div className='w-screen h-1/4 align-center justify-center bg-slate-700'>
                <Contact/>
            </div>

        </main>
    )

}


export default Landing; 