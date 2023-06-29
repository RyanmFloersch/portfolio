


function SlideButton(props) {


    return (
        <div className='relative h-20 w-40 ml-10 bg-slate-600' >
            <a href="#contact">
                <div className='flex justify-center items-center place-content-center  absolute border-2 border-emerald-200 bg-slate-700 shadow-md h-20 w-40  -left-1 -top-1 hover:translate-y-1 hover:translate-x-1  origin-center   duration-200 transform-none'>

                    <p className="text-center  text-2xl">Connect</p>

                </div>
            </a>
        </div>
    );
}



export default SlideButton;