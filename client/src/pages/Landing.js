// import {useState, useEffect} from 'react';



// import Project from '../components/Project';

import ProjectCarousel from '../components/ProjectCarousel';

import 'flowbite'

function Landing(props) {

    // const project_1 = 'This application is a simple client-side application that allows the user to insert a location of their choosing and be provided with four different bowling locations with the name of the establishment, the address, the distance from the starting point, and the phone number. This project was made with group members to build an application using third-party APIs so that we could apply our new acquired skills to the test. We used team collaboration, agile development, storytelling, and project demonstration.';
    // const project_2 = 'A web application made to allow users to post and favorite house listings. This application makes use of express to route the information of the application while also making use of sequelize to create the models that would store the user and house data in the sql database.';

    return (
        <main className="flex flex-col text-emerald-200 ">
            <section className=' flex w-full items-center justify-center '>
                <img className="h-auto max-w-lg transition-all duration-300 rounded-full filter grayscale hover:grayscale-0 mt-5" src="/Photo.jpg" alt=" Ryan " />

                <div className='hero mt-5 w-1/2 '>
                    <h3 className='text-center'>Hello!</h3>
                    <p className='text-center'>My name is Ryan Floersch, I'm from Princeton NJ and studdied Software development at DeVry University. </p>
                    <br></br>
                    <p className='text-center m-5'>I recently completed a web development bootcamp. I am always interested in learning more and I'm excited to apply that knowledge within a professional environment.</p>

                </div>
            </section>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <h1 className='flex justify-center text-5xl'>Projects</h1>

            {/* <section className='flex flex-col items-center'>
                <Project urlLink={"https://github.com/RyanmFloersch/BowlCrawl"} image={"/BowlMap.png"} alt={"image of bowl crawl website"} project={project_1} />
                <Project urlLink={"https://github.com/RyanmFloersch/Realtor_App"} image={"/HouseHunter.png"} alt={"image of house hunter website login page"} project={project_2} />
                <Project urlLink={"https://github.com/AustinL96/daedalus_roster"} image={"/HouseHunter.png"} alt={"image of house hunter website login page"} project={project_2} />

            </section> */}

            <ProjectCarousel />


            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </main>
    )

}


export default Landing; 