import React from 'react';
import bgChair from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../shared/PrimaryButton';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bgChair})`}} className="hero min-h-[80vh] bg-white bg-cover bg-center">
         <div className="hero-content flex-col lg:flex-row-reverse">
           <img src={chair} className="max-w-md lg:max-w-lg rounded-lg shadow-2xl" />
         <div>
          <h1 className="text-5xl text-accent font-bold">Your New Smile Starts Here</h1>
           <p className="py-6 text-accent lg:w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <PrimaryButton text='Get Started'/>
         </div>
      </div>
</div>
    );
};

export default Banner;