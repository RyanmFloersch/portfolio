
import SlideButton from "./slideButton";


function About(props) {
    return (
        <>

            <section className=' flex flex-row  sm:items-start lg:justify-start  justify-center lg:pl-64 mt-5 '>

                <div className="flex flex-col md:ml-20  ">
                    <img className="md:w-3/4 w-2/4 mt-5 transition-all duration-300 rounded-full filter grayscale hover:grayscale-0 " src="/Photo.jpg" alt=" Ryan " />

                    <h1 className="md:text-7xl text-5xl mt-10 ml-5">Ryan Floersch</h1>
                    <p className="my-10 ml-6">Welcome to my page</p>
                    <SlideButton link="#contact" />
                </div>
                {/*                 
                <div className='hero mt-5 w-1/2 '>
                    <h3 className=''>Hello!</h3>
                    <p className='text-center'>My name is Ryan Floersch, I'm from Princeton NJ and studdied Software development at DeVry University. </p>
                    <br></br>
                    <p className='text-center m-5'>I recently completed a web development bootcamp. I am always interested in learning more and I'm excited to apply that knowledge within a professional environment.</p>
                </div> */}
            </section>

        </>
    )
}


export default About;