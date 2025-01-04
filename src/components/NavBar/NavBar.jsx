import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/img/hotel.png'
const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const links = <>
        <li><NavLink to="/" activeClassName="text-white " className="hover:text-yellow-500">Home</NavLink></li>
        <li><NavLink to="/rooms" activeClassName="text-white" className="hover:text-yellow-500">Rooms</NavLink></li>
        <li><NavLink to="/mybookings" activeClassName="text-white" className="hover:text-yellow-500">My Bookings</NavLink></li>
        <li><NavLink to="/aboutUs" activeClassName="text-white" className="hover:text-yellow-500">About-Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-black sticky z-10 top-0 border-b-2 border-[#d3a955]" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-500 text-white rounded-box  z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-base md:text-2xl text-white">
                    <img className='w-11' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex gap-1 items-center">
                        <div className="w-10 rounded-full border bg-[#d3a955] ">
                            <img className="rounded-full p-1" src={user.photoURL} alt="" />
                        </div>
                        <Link onClick={logOut} className="text-white">
                            <button className="btn text-[#d3a955] bg-black  border-[#d3a955] hover:text-black">Logout</button>
                        </Link>
                    </div>
                ) : (
                    <Link to="/login" className="text-white">
                        <button className="btn text-[#d3a955] bg-black  border-[#d3a955] hover:text-black">Login</button>
                    </Link>
                )}
            </div>

        </div>
    );
};

export default NavBar;
