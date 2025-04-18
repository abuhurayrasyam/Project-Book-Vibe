import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink to={'/'}><li className='btn btn-ghost m-3 cursor-pointer'>Home</li></NavLink>
        <NavLink to={'/my-books'}><li className='btn btn-ghost m-3 cursor-pointer'>My Books</li></NavLink>
        <NavLink to={'/rating-chart'}><li className='btn btn-ghost m-3 cursor-pointer'>Rating Chart</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost lg:text-xl text-[15px]">World Book Library</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-400 text-white">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;