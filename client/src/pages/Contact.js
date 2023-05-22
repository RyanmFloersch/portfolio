import {useState, useEffect} from 'react';
import axios from 'axios';

function Contact(props) {

    return (
        <main>
            <section>
                <h1>Welcome</h1>
                <form action="name">
                    <label htmlFor="">Name: </label>
                    <input type="text" />
                    <label htmlFor="">Email: </label>
                    <input type="email" />
                    <label htmlFor="">Content: </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>

            </section>
        </main>
    )
    
}

export default Contact; 