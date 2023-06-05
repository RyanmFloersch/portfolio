import {useState, useEffect} from 'react';
import axios from 'axios';

import "flowbite"

function Contact(props) {

    return (
        <main className='flex flex-col px-5 w-full my-auto text-emerald-200 items-center'>
                <p className='my-5 text-xl'>Please enter your information bellow to contact me.</p>
                <form action="name " className='flex flex-col 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-4/6 w-full '>
                    <label  htmlFor="" className='' >Name: </label>
                    <input className=' w-5/6' type="text" />
                    <label htmlFor="">Email: </label>
                    <input className=' w-5/6' type="email" />
                    <label  htmlFor="">Content: </label>
                    <textarea className=' w-full' name="" id="" cols="30" rows="10"></textarea>

                    <button className='rounded bg-emerald-800 xl:w-2/6 lg:w-2/6  md:w-1/6 w-2/6 my-4 '>Submit</button>
                </form>

        </main>
        
    )
    
}

export default Contact; 