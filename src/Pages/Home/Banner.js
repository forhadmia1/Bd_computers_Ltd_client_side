import React from 'react';
import banner from '../../Assets/Images/Banner.jpg'
const Banner = () => {
    return (
        <section className='bg-secondary'>
            <div className="hero h-full py-16 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">Computers Hardware Manufacturer And Supplier</h1>
                        <p className="py-6">We manufacture all international quality computer hardware and supply them.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;