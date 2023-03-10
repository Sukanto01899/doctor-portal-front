import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const Users = () => {
    const {data: users, isLoading, error, refetch} = useQuery('users', ()=> fetch(`http://localhost:5000/user`, {
        method: 'GET', 
        headers: {
          'authorization': `bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => res.json()));

    if(isLoading){
        return <Loading/>
    }

    const MakeAdmin = (email)=>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT', 
            headers: {
              'authorization': `bearer ${localStorage.getItem('access_token')}`
            }
          })
        .then(res => {
            if(res.status === 403 || res.status === 401){
                toast.error('Fail to make admin')
                console.log("wrong")
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Successfully made admin')
            }
        })
    }
    

    return (
        <div>
            <h2>All users {users?.length}</h2>
            <div className="overflow-x-auto">
               <table className="table w-full text-accent">
    {/* head*/}
               <thead className='text-white bg-accent'>
                  <tr>
                    <th>SL</th>
                   <th>Email</th>
                   <th>ID</th>
                   <th>Access</th>
                  </tr>
                </thead>
                 <tbody>
      {/* row 1 */}
                     {
                       users?.map((user, index) => (
                            <tr>
                            <th>{index + 1}</th>
                              <th>{user?.email}</th>
                              <td>{user?._id}</td>
                              <td className='space-x-2'>
                               {user.role !== 'admin' &&  <button onClick={()=>MakeAdmin(user.email)} className="btn btn-xs text-accent">Make Admin</button>}
                                <button className="btn btn-xs text-red-400">Remove Admin</button>
                              </td>
                           </tr>
                        ))
                     }
                   </tbody>
                 </table>
          </div>
        </div>
    );
};

export default Users;