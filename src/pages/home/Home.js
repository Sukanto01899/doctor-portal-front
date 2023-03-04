import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Footer from './Footer';
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
            <Footer/>
        </div>
    );
};

export default Home;