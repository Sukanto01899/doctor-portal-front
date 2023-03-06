import React, { useState } from 'react';
import AppontmentBanner from './AppontmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppontmentBanner date={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
        </div>
    );
};

export default Appointment;