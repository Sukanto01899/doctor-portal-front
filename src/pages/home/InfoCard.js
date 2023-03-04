import React from 'react';

const InfoCard = ({data: {title, info, img, bgColor}}) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor} pl-4 pt-4 lg:pt-0`}>
         <figure><img src={img} alt="Album"/></figure>
          <div className="card-body text-white">
            <h2 className="card-title">{title}</h2>
            <p>{info}</p>
          </div>
        </div>
    );
};

export default InfoCard;