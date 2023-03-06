import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import Service from './service/Service';
import Tearms from './Tearms';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <Tearms/>
            <Appointment/>
            <Testimonial/>
            <ContactForm/>
        </div>
    );
};

export default Home;