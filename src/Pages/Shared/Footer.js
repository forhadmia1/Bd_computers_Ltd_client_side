import React from 'react';
import { BsTwitter, BsTelephoneFill } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary bg-opacity-40">
            <div class="footer p-10 container mx-auto text-base-content">
                <div>
                    <span class="text-secondary text-2xl font-bold">BD Computers LTD</span>
                    <p>Computers Hardware Manufacturer And Supplier</p>
                    <div class="grid grid-flow-col gap-6 text-2xl mt-4">
                        <Link to='' className='p-3 rounded-full border hover:bg-primary hover:text-white duration-200'><BsTwitter /></Link>
                        <Link to='' className='p-3 rounded-full border hover:bg-primary hover:text-white duration-200'><FaFacebookF /></Link>
                        <Link to='' className='p-3 rounded-full border hover:bg-primary hover:text-white duration-200'><FaLinkedinIn /></Link>
                    </div>
                </div>
                <div>
                    <span class="footer-title">Quick Links</span>
                    <Link to='/' class="link link-hover flex items-center"><MdKeyboardArrowRight className='text-xl' /><span>Home</span></Link>
                    <Link to='/blogs' class="link link-hover flex items-center"><MdKeyboardArrowRight className='text-xl' /><span>Blogs</span></Link>
                    <Link to='/portfolio' class="link link-hover flex items-center"><MdKeyboardArrowRight className='text-xl' /><span>My Portfolio</span></Link>
                </div>
                <div>
                    <span class="footer-title">Get In Touch</span>
                    <p className='flex items-center'><BsTelephoneFill className='mr-2 text-xl text-secondary' />+8801700-000000</p>
                    <p className='flex items-center mt-2'><MdEmail className='mr-2 text-xl text-secondary' />forhad8613@gmail.com</p>
                    <p className='flex items-center mt-2'><FaHome className='mr-2 text-xl text-secondary' />Rangpur, Bangladesh</p>
                </div>
            </div>
            <div className='p-4 text-white text-center bg-secondary'>
                <p>Copyright &copy; 2022 - All right reserved by BD Computers LTD</p>
            </div>
        </footer>
    );
};

export default Footer;