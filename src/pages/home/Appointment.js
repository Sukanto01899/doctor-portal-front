import React from 'react';
import appointmentBg from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import PrimaryButton from '../shared/PrimaryButton';

const Appointment = () => {
    return (
        <section className='flex  items-center mt-32' style={{backgroundImage: `url(${appointmentBg})`}}>
            <div  className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 space-y-4 py-5 lg:py-0 px-4 lg:px-0 lg:mr-12' >
                <h2 className='text-primary text-xl uppercase'>Appointment</h2>
                <h1 className='text-4xl text-white'>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton text='Get started'/>
            </div>
        </section>
    );
};

export default Appointment;