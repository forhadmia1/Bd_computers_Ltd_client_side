import React from 'react';
import { Link } from 'react-router-dom';
import sample1 from '../../Assets/Images/portfolio/just_justice.png'
import sample2 from '../../Assets/Images/portfolio/laptopStock.png'
import sample3 from '../../Assets/Images/portfolio/sample.png'

const MyPortfolio = () => {
    return (
        <div>
            <div className='px-14 grid grid-cols-1 md:grid-cols-2 my-8'>
                <div>
                    <h2 className='text-3xl font-bold text-accent'>MD Forhad Mia</h2>
                    <p className='text-secondary text-xl mt-2'>Email: forhad8613@gmail.com</p>
                    <p className='text-secondary text-xl mt-2'>Education: <span>Diploma in medical assistant</span></p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mt-3 text-slate-500'>Skills</h2>
                    <ul>
                        <li className='list-disc list-inside font-semibold'>Html5</li>
                        <li className='list-disc list-inside font-semibold'>Css3</li>
                        <li className='list-disc list-inside font-semibold'>Bootstrap</li>
                        <li className='list-disc list-inside font-semibold'>Tailwind</li>
                        <li className='list-disc list-inside font-semibold'>Javascript</li>
                        <li className='list-disc list-inside font-semibold'>React js</li>
                        <li className='list-disc list-inside font-semibold'>Express js</li>
                        <li className='list-disc list-inside font-semibold'>React Reoter</li>
                    </ul>
                </div>
            </div >
            <div class="divider"></div>
            <div>
                <h2 className='text-4xl text-primary text-center font-bold my-16'>Portfolio</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center container mx-auto gap-20 my-16'>
                    <div class="card w-96 bg-base-100 shadow-xl h-96">
                        <figure><img src={sample1} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Just Justice</h2>
                            <div class="card-actions justify-start">
                                <a rel="noreferrer" href='https://just-justice.web.app/' target='_blank' className='btn btn-primary mt-4'>Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl h-96">
                        <figure><img className='h-40 w-full' src={sample2} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Laptop Stockroom</h2>
                            <div class="card-actions justify-start">
                                <a rel="noreferrer" href='https://laptop-stockroom.web.app/' target='_blank' className='btn btn-primary mt-4'>Visit Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl h-96">
                        <figure><img src={sample3} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">headsphones Hub</h2>
                            <div class="card-actions justify-start">
                                <a rel="noreferrer" href='https://headphones-hub.netlify.app/' target='_blank' className='btn btn-primary mt-4'>Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;