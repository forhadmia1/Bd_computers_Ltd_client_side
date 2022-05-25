import React from 'react';
import CountUp from 'react-countup';
import parts from '../../Assets/Icons/products.png'
import review from '../../Assets/Icons/rating.png'
import customer from '../../Assets/Icons/customer.png'

const BusinessSummary = () => {
    return (
        <div className="container my-24 px-6 mx-auto">
            <h2 className='text-center text-4xl text-accent font-bold mb-16'>Millions Business Trusts Us</h2>
            <section className="mb-32 text-gray-800 text-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-0 items-center">
                    <div className="mb-12 lg:mb-0 relative">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={parts} alt='' />
                            </div>
                        </div>
                        <h5 className="text-lg  text-blue-600 font-bold mb-4"><CountUp end={100} />+</h5>
                        <h6 className="font-medium text-gray-500">Parts</h6>
                        <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                    </div>

                    <div className="mb-12 lg:mb-0 relative">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={customer} alt='' />
                            </div>
                        </div>
                        <h5 className="text-lg text-blue-600 font-bold mb-4"><CountUp end={100} />+</h5>
                        <h6 className="font-medium text-gray-500">Customers</h6>
                        <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
                    </div>

                    <div className="mb-12 md:mb-0 relative">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={review} alt='' />
                            </div>
                        </div>
                        <h5 className="text-lg  text-blue-600 font-bold mb-4"><CountUp end={100} />+</h5>
                        <h6 className="font-medium text-gray-500">Reviews</h6>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BusinessSummary;