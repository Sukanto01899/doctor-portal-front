import React from 'react';
import bg from '../../assets/images/appointment.png';

const ContactForm = () => {
    return (
        <section style={{backgroundImage: `url(${bg})`}} className='mt-20 flex justify-center py-5'>
            <div>
            <div className='text-center'>
                <h2 className='text-xl uppercase text-primary'>Contact Us</h2>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
           <div className='mt-8'>
              <form className='space-y-5 w-[400px] lg:w-[450px] p-4'>
                <input className='w-full h-12 px-4 outline-none' type="text" placeholder='Email address'/>
                <input className='w-full h-12 px-4 outline-none' type="text" placeholder='Your subject'/>
                <textarea className='w-full outline-none p-4' placeholder='Your message' name="" id="" cols="30" rows="4"></textarea>
                <div className='flex justify-center'>
                <input className='btn-primary btn w-[120px]' type="submit" name="" id="" />
                </div>
              </form>
           </div>
            </div>
        </section>
    );
};

export default ContactForm;