import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
const Root = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className='bg-[#010313]'>
            <div className=' min-h-screen flex flex-col'>
                <NavBar />
                <div className="flex-grow">
                    <Outlet />
                    
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
