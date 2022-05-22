import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    return (
        <div className="navbar bg-base-100">
            <div className='container mx-auto'>
                <div className='navbar-start w-8/12 flex'>
                    {location.pathname === "/dashboard" && <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>}
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl text-secondary">BD Computers LTD</Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown flex  justify-end">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/home'}>Home</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                            {!user ? <li><Link to={'/login'}>LogIn</Link></li>
                                : <>
                                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                    <li><button onClick={() => signOut(auth)}>Sign Out</button></li>
                                    <li className='font-bold'><span>{user && user?.displayName}</span></li>
                                </>}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end w-8/12 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                        {!user ? <li><Link to={'/login'}>LogIn</Link></li>
                            : <>
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                <li><button className='btn btn-ghost' onClick={() => signOut(auth)}>Sign Out</button></li>
                                <li className='font-bold'><span>{user && user?.displayName}</span></li>
                            </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;