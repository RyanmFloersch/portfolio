import Project from "../components/Project";


function Portfolio(props) {
    const project_1 = 'This application is a simple client-side application that allows the user to insert a location of their choosing and be provided with four different bowling locations with the name of the establishment, the address, the distance from the starting point, and the phone number. This project was made with group members to build an application using third-party APIs so that we could apply our new acquired skills to the test. We used team collaboration, agile development, storytelling, and project demonstration.';
    const project_2 = 'A web application made to allow users to post and favorite house listings. This application makes use of express to route the information of the application while also making use of sequelize to create the models that would store the user and house data in the sql database.';
  
    return (
        <>


            <section className='flex flex-col items-center'>
                <Project urlLink={"https://github.com/RyanmFloersch/BowlCrawl"} image={"/BowlMap.PNG"} alt={"image of bowl crawl website"} project={project_1} />
                <Project urlLink={"https://github.com/RyanmFloersch/Realtor_App"} image={"/HouseHunter.png"} alt={"image of house hunter website login page"} project={project_2} />
                <Project urlLink={"https://github.com/AustinL96/daedalus_roster"} image={"/HouseHunter.png"} alt={"image of house hunter website login page"} project={project_2} />

            </section>
        </>


    );

}


export default Portfolio;