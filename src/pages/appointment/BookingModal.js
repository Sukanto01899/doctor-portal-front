import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

const BookingModal = ({treatment, date, setTreatment,refetch}) => {
  const [user, loading, error] = useAuthState(auth);
    const {_id, name, slots} = treatment;
    const formattedDate= format(date, 'PP')

    // Handle booking
    const handleBooking =(e)=>{
      e.preventDefault();
      const slot = e.target.slot.value;
      const booking = {
        treatmentID: _id,
        treatment: name,
        date: formattedDate,
        slot,
        patient: user.email,
        patientName: user.displayName,
        phone: e.target.phone.value
      }
      
      fetch('http://localhost:5000/service', {
        method: 'POST', 
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          toast.success(`Appointment is set, ${formattedDate} at ${slot}`)
          refetch()
          setTreatment(null)
        }else{
          toast.warn(`Already have an appointment on ${data.exist?.date} at ${data.exist?.slot}`)
          setTreatment(null)
        }
      })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">{}</h3>
              <p className="py-4 text-accent text-xl">{name}</p>
              <form onSubmit={handleBooking} className='space-y-2 grid justify-items-center'>
                <input name='date' type="text" value={format(date, 'PP')} placeholder="Type here" className="input w-full max-w-xs" readOnly/>
                <select name='slot' className="select select-bordered w-full max-w-xs">
                      {
                        slots.map((slot, index) => <option key={index}>{slot}</option>)
                      }
                </select>
                <input name='name' disabled value={user?.displayName} type="text"  className="input w-full max-w-xs" />
                <input name='email' disabled value={user?.email} type="text" placeholder="Type email" className="input w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Type phone" className="input w-full max-w-xs" />
                <input type="submit" className="btn btn-secondary w-full" />
              </form>
            </div>
            </div>
            </div>
    );
};

export default BookingModal;