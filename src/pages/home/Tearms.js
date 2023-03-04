import React from 'react';
import treatmeant from '../../assets/images/treatment.png';
import PrimaryButton from '../shared/PrimaryButton';

const Tearms = () => {
    return (
        <div className="hero mt-20">
           <div className="hero-content flex-col lg:flex-row">
             <img className='w-[322px] h-[406px] lg:w-[458px] lgh-[576px] mr-12 rounded-md' src={treatmeant} />
             <div>
               <h1 className="text-5xl text-accent font-bold">Box Office News!</h1>
              <p className="py-6 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <PrimaryButton text='Get Started'/>
           </div>
         </div>
        </div>
    );
};

export default Tearms;