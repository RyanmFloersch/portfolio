


function SlideButton(props) {

    return (
        <div className='relative h-20 w-20 ml-10 bg-slate-600'>
            <div className='absolute border-2 border-emerald-200 bg-slate-700 shadow-md h-20 w-20  -left-1 -top-1 hover:translate-y-1 hover:translate-x-1  origin-center   duration-200 transform-none'></div>
        </div>
    );
}



export default SlideButton;