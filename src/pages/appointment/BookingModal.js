import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date}) => {
    const {name, slots} = treatment;
    const handleBooking =(e)=>{
      e.preventDefault();
      const slot = e.target.slot.value;
      console.log(slot)
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
                        slots.map(slot => <option>{slot}</option>)
                      }
                </select>
                <input name='name' type="text" placeholder="Type name" className="input w-full max-w-xs" />
                <input name='email' type="text" placeholder="Type email" className="input w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Type phone" className="input w-full max-w-xs" />
                <input type="submit" className="btn btn-secondary w-full" />
              </form>
            </div>
            </div>
            </div>
    );
};

export default BookingModal;