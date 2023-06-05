import {useState, useEffect} from 'react';
import axios from 'axios';

function Contact(props) {

    return (
        <main className='flex flex-col px-5 w-full my-auto text-emerald-200 items-center'>
                <p className='my-5'>Please enter your information bellow to contact me.</p>
                <form action="name " className='flex flex-col xl:w-1/3 lg:w-2/3 w-1/3 left-auto      mx-auto'>
                    <label  htmlFor="" className='' >Name: </label>
                    <input className='xl:w-3/6 lg:w-3/6 md:w-2/6 w-5/6' type="text" />
                    <label htmlFor="">Email: </label>
                    <input className=' xl:w-3/6 lg:w-3/6 md:w-2/6 w-5/6' type="email" />
                    <label  htmlFor="">Content: </label>
                    <textarea className='xl:w-5/6 lg:w-5/6 md:w-3/6 w-full' name="" id="" cols="30" rows="10"></textarea>

                    <button className='rounded bg-emerald-800 xl:w-1/6 lg:w-1/6 my-4 lg:w-full md:w-1/6'>Submit</button>
                </form>

        </main>
    )
    
}

export default Contact; 