import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const cardData = [
        {
            title: 'Opening Hours',
            info: 'Lorem Ipsum is simply dummy text of the pri',
            img: clock,
            bgColor: 'bg-gradient-to-r from-primary to-blue-300'
        },
        {
            title: 'Visit our location',
            info: 'Brooklyn, NY 10036, United States',
            img: marker,
            bgColor: 'bg-accent'
        },
        {
            title: 'Contact us now',
            info: '+000 123 456789',
            img: phone,
            bgColor: 'bg-gradient-to-r from-primary to-blue-300'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:px-14  lg:py-8 py-4'>
            {cardData.map((data, index) => <InfoCard key={index} data={data}/>)}
        </div>
    );
};

export default Info;