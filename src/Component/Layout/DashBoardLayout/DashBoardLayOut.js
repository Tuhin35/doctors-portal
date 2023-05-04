import React, { useContext } from 'react';
import Navbar from '../../Pages/Shared/Navber/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/UseAdmin';
import { AuthContext } from '../../../Context/UserContext';

const DashBoardLayOut = () => {
 const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='dashboard'>My Appointment</Link></li>
    {
      isAdmin && 
      <>
        <li><Link to='users'>Users</Link></li>
        <li><Link to='addDoctors'>Add Doctors </Link></li>
        <li><Link to='manageDoctors'>Manage Doctors</Link></li>
        </>
        
    }
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBoardLayOut;