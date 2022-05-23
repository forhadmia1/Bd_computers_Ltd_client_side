import React from 'react';
import errorPage from '../../Assets/Images/errorPage.jpg'

const NotFound = () => {
    return (
        <div className='md:px-12 flex h-screen items-center'>
            <img className='w-full md:h-screen' src={errorPage} alt="Page not found" />
        </div>
    );
};

export default NotFound;