import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import teeth from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = [
        {
            title: 'Fluoride Treatment',
            img: fluoride,
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            title: 'Cavity Filling',
            img: cavity,
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            title: 'Teeth Whitening',
            img: teeth,
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='px-5 lg:px-14 mt-12'>
            <div className='text-center'>
                <h2 className='text-xl text-primary'>Service</h2>
                <h1 className='text-4xl text-accent'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-12'>
                {services.map((service, index) => <ServiceCard key={index} service={service}/>)}
            </div>
        </div>
    );
};

export default Service;