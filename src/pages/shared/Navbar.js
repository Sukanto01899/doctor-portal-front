import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const menuItem = <>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='/contact-us'>Contact us</Link></li>
      <li>{user ? <button onClick={()=> signOut()} className="btn btn-ghost">Log out</button> : <Link to='/login'>Login</Link>}</li>
      </>
    return (
        <div className="navbar bg-base-100 lg:px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact text-accent dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className=" normal-case text-xl text-accent">Doctor Portal</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-accent">
      {menuItem}
    </ul>
  </div>

</div>
    );
};

export default Navbar;