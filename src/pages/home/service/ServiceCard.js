import React from 'react';

const ServiceCard = ({service: {title, img, info}}) => {
    return (
        <div className={`card lg:card-col shadow-lg pl-4 pt-4 lg:pt-0`}>
         <figure><img src={img} alt="Album"/></figure>
          <div className="card-body text-center text-accent">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{info}</p>
          </div>
        </div>
    );
};

export default ServiceCard;