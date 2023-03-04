import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import { default as people2, default as people3 } from '../../assets/images/people2.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Sukanto',
            address: 'Bangladesh'
        },
        {
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Sukanto',
            address: 'Bangladesh'
        },
        {
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Sukanto',
            address: 'Bangladesh'
        },
    ]
    return (
        <section className='px-5 lg:px-14 mt-20'>
            <div className='flex justify-between items-center'>
                <div className='text-accent'>
                    <h2 className='text-primary text-xl uppercase'>Testimonial</h2>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='max-w-[192px] max-h-[156px]' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8'>
                {reviews.map(review => <TestimonialCard review={review}/>)}
            </div>
            
        </section>
    );
};

export default Testimonial;