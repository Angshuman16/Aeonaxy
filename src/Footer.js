import React from 'react';
import googleimage from './googleimage.jpg';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import {BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='px-4 md:flex md:justify-center md:items-start md:py-8'>

      <div className='mb-8 md:mb-0 md:mr-24'>
        <h1 className='font-bold text-3xl text-blue-900 mb-2'>Easy</h1>
        <h1 className='font-bold text-3xl text-blue-500 mb-2'>ahead</h1>
        <h3 className='w-64 mb-4 text-sm md:text-base'>We take the work out of connecting with others so that you can accomplish more</h3>
        <img src={googleimage} className='w-[8rem] mx-auto md:mx-0 md:ml-4' alt='Google' />
        <div className='flex justify-center md:justify-start space-x-4 mt-4'>
          <FaTwitter />
          <FaFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsYoutube />
        </div>
        <h1 className='text-slate-500 text-sm md:text-base mt-4 cursor-pointer text-center md:text-left'>Copyright Calendly 2022</h1>
      </div>

      <div className='mb-8 md:mb-0 md:mx-12'>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>About</h1>
        <ul>
          <li className='text-slate-500 mb-3 cursor-pointer'>About Calendly</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Contact Sales</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Newsroom</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Careers</li>
          <li className='text-slate-500 mb-8 cursor-pointer'>Security</li>
        </ul>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>Support</h1>
        <ul>
          <li className='text-slate-500 mb-3 cursor-pointer'>Help Centers</li>
          <li className='text-slate-500 mb-8 cursor-pointer'>Video Tutorials</li>
        </ul>
      </div>

      <div className='mb-8 md:mb-0 md:mx-12'>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>Solutions</h1>
        <ul>
          <li className='text-slate-500 mb-3 cursor-pointer'>Customer Success</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Sales</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Recruiting</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Information Technology</li>
          <li className='text-slate-500 mb-8 cursor-pointer'>Marketing</li>
        </ul>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>Add-ons</h1>
        <ul>
          <li className='text-slate-500 mb-3 cursor-pointer'>Download for Chrome</li>
          <li className='text-slate-500 mb-8 cursor-pointer'>Download for Firefox</li>
        </ul>
      </div>

      <div className='md:mx-12'>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>Popular Features</h1>
        <ul>
          <li className='text-slate-500 mb-3 cursor-pointer'>Embed Calendly</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Availability</li>
          <li className='text-slate-500 mb-3 cursor-pointer'>Sending Notifications</li>
          <li className='text-slate-500 mb-8 cursor-pointer'>Using Calendly Mobile</li>
        </ul>
        <h1 className='text-xl font-bold mb-3 text-blue-900'>Developers</h1>
        <ul>
          <li className='text-slate-500 mb-8 cursor-pointer'>Developer Tools</li>
        </ul>
        <h1 className='text-slate-500 mb-8 cursor-pointer text-center md:text-left'>Privacy / Terms and Conditions</h1>
      </div>
    </div>
  );
}

export default Footer;
