import React from 'react'
import googleimage from './googleimage.jpg';
import { GrGoogle } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

import { CiLinkedin } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';

import { GrLinkedin } from 'react-icons/gr';


const Footer = () => {
  return (
    <div className='h-96 mt-28 pb-8 flex  justify-center ' >


      <div className='ml-20'>
        <h1 className='font-bold text-3xl text-blue-900 mb-4'>Easy </h1>
        <h1 className='font-bold text-3xl text-blue-500 mb-4'>ahead</h1>

        <h3 className='w-80 mb-4'>We take the work out of connecting with others so that you can accomplish more</h3>


        <img src={googleimage}  className='w-[18rem] ml-18'/>

        
        <div className='flex space-x-4 mb-[12.5rem]'>
        <FaTwitter/>

        <FaFacebook />

        <BsInstagram />

        <BsLinkedin />

        <BsYoutube />






        </div>


        <h1 className='text-slate-500 pb-14 cursor-pointer '>Copyright Calendly 2022</h1>

        




      </div>

      <div className='mx-28'> 

      <h1 className='text-xl font-bold mb-3 text-blue-900'>About</h1>

      <li className='list-none mb-3 text-slate-500 cursor-pointer '>About Calendly</li>
      <li className='list-none mb-3 text-slate-500 cursor-pointer'>Contact Sales</li>
      <li className='list-none mb-3 text-slate-500 cursor-pointer'>Newsroom</li>
      <li className='list-none mb-3 text-slate-500 cursor-pointer'>Careers</li>
      <li className='list-none mb-8 text-slate-500 cursor-pointer'>Security</li>


      <h1 className='text-xl font-bold mb-3 text-blue-900'>Support</h1>

      
      <li className='list-none mb-3 text-slate-500 cursor-pointer'>Help Centers</li>
      <li className='list-none mb-8 text-slate-500 cursor-pointer' >Video Tutorials</li>

      </div>

 <div className='mx-20'> 

<h1 className='text-xl font-bold mb-3 text-blue-900'>Solutions</h1>

<li className='list-none mb-3 text-slate-500 cursor-pointer '>Customer Sucess</li>
<li className='list-none mb-3 text-slate-500 cursor-pointer'>Sales</li>
<li className='list-none mb-3 text-slate-500 cursor-pointer'>Recruiting</li>
<li className='list-none mb-3 text-slate-500 cursor-pointer'>Information Technology</li>
<li className='list-none mb-8 text-slate-500 cursor-pointer'>Marketing</li>


<h1 className='text-xl font-bold mb-3 text-blue-900'>Add- ons</h1>


<li className='list-none mb-3 text-slate-500 cursor-pointer'>Download for Chrome</li>
<li className='list-none mb-8 text-slate-500 cursor-pointer'>Download for Firefox</li>


</div>


<div className='mx-20 '> 

<h1 className='text-xl font-bold mb-3 text-blue-900'>Popular Features</h1>

<li className='list-none mb-3 text-slate-500 cursor-pointer '>Embed Calendly</li>
<li className='list-none mb-3 text-slate-500 cursor-pointer'>Availability</li>
<li className='list-none mb-3 text-slate-500 cursor-pointer'>Sending Notification</li>
<li className='list-none mb-[4.5rem] text-slate-500 cursor-pointer'>Using Calendly Mobile</li>


 
<h1 className='text-xl font-bold mb-3 text-blue-900'>Developers</h1>


<li className='list-none mb-36  text-slate-500 cursor-pointer'>Developer Tools</li>



<h1 className='text-slate-500 ml-20 cursor-pointer '>Privacy / Terms and Condition </h1>






</div>




      
      
      </div>
  )
}

export default Footer