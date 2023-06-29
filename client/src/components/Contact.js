import { useState, useEffect } from 'react';
import axios from 'axios';

import "flowbite"


function Contact(props) {


    const [formData, setFormData] = useState({
        messageName: '',
        messageEmail: '',
        messageSubject: '',
        messageContent: ''
    });

    // Handles the changes to the form and assigns it to the formData state var. 
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    // Makes a post request to send when submit is clicked.
    const submitEmail = (e) => {
        e.preventDefault();
        axios.post("/send", {
                name: formData.messageName,
                email: formData.messageEmail,
                subject: formData.messageSubject,
                message: formData.messageContent
            }
        ).then((response) => {

            if (response.data.status === 'success') {
                alert("Message Sent.");
                resetForm();
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.");
            }
        })
    };

    // Clear the form fields
    const resetForm = () => {
        document.getElementById('contactForm').reset();
    };

    // https://lo-victoria.com/build-a-contact-form-with-react-and-nodemailer
    return (
        <section className=' flex flex-col px-5 w-full my-auto text-emerald-200 items-center' id="contact">

            <h1 className=' justify-center my-10 text-5xl'>Contact</h1>
            <p className='my-5 text-xl'>Please enter your information bellow to contact me.</p>

            <form id="contactForm" className='flex flex-col 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-4/6 w-full '  onSubmit={submitEmail}  method="POST">

                <div className='flex md:flex-row  flex-col justify-between w-full my-2'>
                    <input name='messageName' placeholder='Name' id='name' type="text"  className=' md:w-2/5 w-full h-2/5 text-black my-2' required value={formData.name} onChange={handleInputChange} />

                    <input name="messageEmail" placeholder='Email' id='email' type="email"  className=' md:w-2/5 w-full h-2/5 text-black my-2' required value={formData.email} onChange={handleInputChange} />
                </div>

                <input name="messageSubject" placeholder='Subject' id="subject" type='text'  className=' md:w-5/6 w-full my-2 text-black form-control' required value={formData.subject} onChange={handleInputChange} />

                <textarea name="messageContent" placeholder='Message Content' id="message"  className=' w-full my-2  text-black' cols="30" rows="10" value={formData.message} onChange={handleInputChange}></textarea>

                <button type='submit'  className='rounded bg-emerald-800 xl:w-2/6 lg:w-2/6  md:w-1/6 w-2/6 my-4 submit ' >Submit</button>
            </form>

        </section>

    )

}

export default Contact; 