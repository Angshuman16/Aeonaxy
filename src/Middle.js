import image from './image.jpg'
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from 'react'

const Middle = () => {
  return (
    <div className='mt-4 md:mt-8'>

      <h1 className='text-center text-4xl font-bold'>
        The Calendly Blog
      </h1>

      <div className='flex flex-wrap justify-center mt-8'>

        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-xl text-center'>ALL</button>
        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-lg text-center'>WHAT'S NEW</button>
        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-lg text-center'>SALES</button>
        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-lg text-center'>RECRUITING</button>
        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-lg text-center'>PRODUCTIVITY</button>
        <button className='mr-4 mb-2 focus:bg-blue-500 focus:text-white px-4 py-2 rounded-lg text-center'>CREATING CALENDLY</button>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center mt-5'>
        <div className="mx-auto md:ml-10 md:w-[50%] text-center md:text-left">
          <img src={image} className='h-auto md:h-96 w-full md:w-auto m-5' />
        </div>

        <div className='md:w-[50%] text-center md:text-left'>
          <h1 className='mb-5'>WHAT'S NEW</h1>
          <h1 className='text-4xl mb-5 font-extrabold'>Welcome to the Time Economy</h1>
          <h1 className='mb-2 '>Our most precious resource is time - and the next decade will be defined by how we manage it</h1>

          <div className="flex items-center justify-center md:justify-start mt-6">
            <h2 className="font-bold mr-2">Read the Article</h2>
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle

