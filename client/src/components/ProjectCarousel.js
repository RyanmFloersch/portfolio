
function test(){
    console.log('test');
}


function ProjectCarousel(prop) {


    return (
        <div className="m-6">
            <div id="animation-carousel" className="relative w-full"  data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div className=" hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/lake.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/Photo.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden group duration-200 ease-linear"  data-carousel-item="active">
                        <div className="text-center  m-5 z-20 absolute invisible group-hover:visible group-hover:bg-emerald-200 group-hover:bg-opacity-60  ">
                            <p className="text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusamus nesciunt hic nulla iure perspiciatis impedit aspernatur non, eveniet facilis eius, id possimus adipisci vero sint sed corporis. Nihil, quisquam.</p>
                        </div>
                        <img src="/logo512.png" className="z-10 relative block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/location-pointer.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div className="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/HouseHunter.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            {/* Project Description */}
            <div className="relative w-full m-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni possimus eum recusandae, reiciendis nobis eligendi quidem voluptatum. Architecto, similique optio numquam pariatur nihil repudiandae voluptate fugiat reiciendis eveniet nemo.</p>
            </div>
        </div>
    )

}


export default ProjectCarousel;