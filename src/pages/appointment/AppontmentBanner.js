
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';


const AppontmentBanner = ({date, setDate}) => {
   
    return (
    <div className="hero ">
       <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='w-[500px]' src={chair} alt='dentisit chaitr'/>
        <div className='text-accent'>
        <DayPicker mode='single' selected={date} onSelect={setDate}/>
        </div>
      </div>
  </div>
    );
};

export default AppontmentBanner;