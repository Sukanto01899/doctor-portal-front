import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    //const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, error, refetch} = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json()));

    if(isLoading){
        return <Loading/>
    }
    
    return (
        <div className='mt-12 '>
            <h4 className='text-primary text-center text-2xl'>You selected {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-14'>
                {services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}/>)}
            </div>

            {treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}/>}
        </div>
    );
};

export default AvailableAppointment;