
import 'flowbite'

import { Carousel } from 'flowbite-react';
// function test(){
//     console.log('test');
// }
import CarsoulProjectItem from './CarouselProjectItem';

import { initFlowbite } from 'flowbite'
import { useEffect } from 'react';



function ProjectCarousel(prop) {
    const project_1 = 'This application is a simple client-side application that allows the user to insert a location of their choosing and be provided with four different bowling locations with the name of the establishment, the address, the distance from the starting point, and the phone number. This project was made with group members to build an application using third-party APIs so that we could apply our new acquired skills to the test. We used team collaboration, agile development, storytelling, and project demonstration.';
    const project_2 = 'A web application made to allow users to post and favorite house listings. This application makes use of express to route the information of the application while also making use of sequelize to create the models that would store the user and house data in the sql database.';
    const project_3 = 'Daedalus Roster, is a user-friendly job board application designed to connect talented individuals with exciting job opportunities. Whether you\'re a freelancer looking for project-based work or a user seeking skilled professionals. Freelancers can effortlessly create and publish detailed job listings, showcasing their expertise, availability, and desired compensation. Meanwhile, users can explore a vast array of job listings, filtering by industry, skillset, location, and more.';

    useEffect(() => {
        initFlowbite();
      }, []);

    return (


        <section className="m-6 ">



            <div id="default-carousel" className="relative w-full h-full px-10 pb-10" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden  duration-700 ease-in-out" data-carousel-item>
                        <p>Slide 1</p>
                        {/* <CarsoulProjectItem urlLink={"https://github.com/RyanmFloersch/BowlCrawl"} projectName={"Bowl Crawl"} image={"/BowlMapPic.png"} alt={"image of bowl crawl website"} project={project_1} /> */}
                    </div>

                    <div className="hidden  duration-700 ease-in-out" data-carousel-item>
                    <p>Slide 2</p>
                        {/* <CarsoulProjectItem urlLink={"https://github.com/RyanmFloersch/Realtor_App"} projectName={"House Hunter"} image={"/HouseHunter.png"} alt={"image of house hunter website login page"} project={project_2} /> */}
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <p>Slide 3</p>
                        {/* <CarsoulProjectItem urlLink={"https://github.com/AustinL96/daedalus_roster"} projectName={"Daedalus Roster"} image={"/RosterPic.png"} alt={"image of daedulus roster website login page"} project={project_3} /> */}
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <p>Slide 4</p>
                        {/* <CarsoulProjectItem urlLink={"https://github.com/AustinL96/daedalus_roster"} projectName={"Daedalus Roster"} image={"/RosterPic.png"} alt={"image of daedulus roster website login page"} project={project_3} /> */}
                    </div>
                </div>


                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none " data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-emerald-200 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-emerald-200 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-emerald-200 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-emerald-200 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div >
        </section >
    )
}


export default ProjectCarousel;