import {useState, useEffect} from 'react';
import axios from 'axios';

function Contact(props) {

    return (
        <main className='flex flex-col mx-2 '>
                <p className='my-5'>Please enter your information bellow to contact me.</p>
                <form action="name " className='flex flex-col   '>
                    <label  htmlFor="">Name: </label>
                    <input className='xl:w-1/6 lg:w-2/6 md:w-2/6 w-5/6' type="text" />
                    <label htmlFor="">Email: </label>
                    <input className=' xl:w-1/6 lg:w-2/6 md:w-2/6 w-5/6' type="email" />
                    <label  htmlFor="">Content: </label>
                    <textarea className='xl:w-2/6 lg:w-3/6 md:w-3/6 w-full' name="" id="" cols="30" rows="10"></textarea>

                    <button className='rounded bg-emerald-200 my-4 lg:w-1/6 md:w-1/6'>Submit</button>
                </form>

        </main>
    )
    
}

export default Contact; 