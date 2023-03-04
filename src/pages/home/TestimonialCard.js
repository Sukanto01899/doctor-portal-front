import React from 'react';

const TestimonialCard = ({review: {img, title, name, address}}) => {
    return (
        <div className='shadow-lg p-4 space-y-6 text-accent rounded-lg'>
            <p className=''>{title}</p>
            <div className='flex items-center '>
                <img className='mr-4 w-[40px] h-[40px]' src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <h5 className='text-sm'>{address}</h5>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;