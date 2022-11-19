import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navber = () => {
  const {user,logOut} = useContext(AuthContext)
  const [dark, setDark] = useState(false)
  const  handelLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(()=>{})
  }
    const menuItem = <>
       <li><Link to='/home'>Home</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {user?.uid ?
             <>
             <li onClick={handelLogOut}><Link>Sign Out</Link></li>
             </>
            :
              <li><Link to='/login'>Log In</Link></li>}
<button onClick={()=>setDark(!dark)} >
             <input type="checkbox" className="toggle" checked /></button>
    </>
    return (
      <div>
        <div data-theme={dark?"valentine":'light'} className="navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItem}
          </ul>
        </div>
        <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
      </div>
    );
};

export default Navber;