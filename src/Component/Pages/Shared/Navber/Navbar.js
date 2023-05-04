import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './doctor profile.jpg'
import { FiLogOut } from 'react-icons/fi';
import { FaRegMoon, FaUser } from 'react-icons/fa';


import { AuthContext } from '../../../../Context/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const menuItems = <React.Fragment>
        <Link to='/'> Home </Link>
        <Link to='/appointment'> Appointment</Link>
        <Link to='/dashboard'>DashBoard</Link>
        <Link to='/about'> About</Link>
        <Link to='/review'>Review</Link>
    </React.Fragment>
    return (
        <div>
            <div className="navbar max-w-screen-xl  bg-sky-600 flex justify-between">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-ghost  normal-case text-xl">Doctor's portal</Link>

                    <div className="w-16 rounded-full m-2">
                        <img src={logo} alt='doctor' />
                    </div>



                </div>

                <div className="flex-none gap-4 text-xl text-white ">


                    {menuItems}


                    {
                        user?.email ?

                            <>
                            <button onClick={logOut}><FiLogOut className="text-4xl" ></FiLogOut></button>
                            {user.photoURL ? 
                           <img className='h-10 w-10 rounded' src={user.photoURl} alt="" />
                           :<FaUser></FaUser> }
                            </>
                          
                            :
                            <Link
                                to="/signup"
                                className="inline-flex w-1/2 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Sign up
                            </Link>

                    }

                    <div className={`App ${theme}`}>
                        <button onClick={toggleTheme}> <FaRegMoon></FaRegMoon> </button>

                    </div>

                    {/*
                   <Link to='signup'> Sign up </Link>

                 <button>LogOut</button> */}

                </div>

                <label htmlFor='dashboard-drawer' tabIndex={2} className='btn btn-ghost lg:hidden'>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;