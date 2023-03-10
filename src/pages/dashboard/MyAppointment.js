import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const [appointment, setAppointment] = useState(null);
    const navigate = useNavigate();


    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
              method: 'GET', 
              headers: {
                'authorization': `bearer ${localStorage.getItem('access_token')}`
              }
            })
            .then(res => {
              if(res.status === 403 || res.status === 401){
                signOut();
                localStorage.removeItem('access_token')
                navigate('/')
              }
              return res.json()
            })
            .then(data => {
              setAppointment(data)
              
            })
            .catch(err => console.log('erro'))
        }
    }, [user, navigate, signOut])
    
    return (
        <div>
            <h1>My appointment {appointment?.length}</h1>
            <div className="overflow-x-auto">
               <table className="table w-full text-accent">
    {/* head*/}
               <thead className='text-white bg-accent'>
                  <tr>
                    <th></th>
                   <th>Name</th>
                   <th>Date</th>
                   <th>Time</th>
                   <th>Treatment</th>
                  </tr>
                </thead>
                 <tbody>
      {/* row 1 */}
                     {
                       appointment?.map(a => (
                            <tr>
                            <th>1</th>
                              <th>{a?.patentName}</th>
                              <td>{a.date}</td>
                              <td>{a.slot}</td>
                              <td>{a.treatment}</td>
                           </tr>
                        ))
                     }
                   </tbody>
                 </table>
          </div>
        </div>
    );
};

export default MyAppointment;