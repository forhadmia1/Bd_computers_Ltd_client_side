import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'

const WhyChoseUs = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='flex items-center font-bold text-xl md:text-3xl justify-center text-accent'>Why Choose BD Computers LTD <HiArrowNarrowRight /></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-28 justify-items-center gap-5'>
                <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1600336757481-6185c4be6ff6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-white">Wholesale</h2>
                    </div>
                </div>
                <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-white">Quality Service</h2>
                    </div>
                </div>
                <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                    <figure><img className='bg-cover' src="https://images.unsplash.com/photo-1619670922021-fc1a7b7dff67?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvY2Vzc29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-white">Ontime Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;