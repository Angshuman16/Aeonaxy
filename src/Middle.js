import image from './image.jpg'
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from 'react'

const Middle = () => {
  return (
    <div className=' mt-[4rem]  '>

      <h1 className='flex items-center justify-center text-4xl font-bold '>
      The Calendly Blog
      </h1>


      <div className='flex items-center justify-center mt-8 '>

        <button  className='mr-10  focus:bg-blue-500 focus:text-white p-2 w-fit rounded-xl text-center'>ALL</button>
        <button className='mr-10 focus:bg-blue-500 focus:text-white p-2 w-fit rounded-lg text-center'>WHAT'S NEW</button>
        <button className='mr-10  focus:bg-blue-500 focus:text-white p-2 w-fit rounded-lg text-center'>SALES</button>
        <button  className='mr-10  focus:bg-blue-500 focus:text-white p-2 w-fit rounded-lg text-center'>RECRUITING</button>
        <button className='mr-10  focus:bg-blue-500 focus:text-white p-2 w-fit rounded-lg text-center'>PRODUCTIVITY</button>
        <button className='mr-10  focus:bg-blue-500 focus:text-white p-2 w-fit rounded-lg text-center'>CREATING CALENDLY</button>




       


      </div>

      <div className='flex items-center justify-center mt-5'>
          <img src={image} className='h-96  m-5' />

          <div className='ml-20 w-[35rem]'>
            <h1 className=' mb-5'>WHAT'S NEW</h1>
            <h1 className='text-4xl mb-5 font-extrabold'>Welcome to the Time Economy</h1>
            <h1 className='mb-2 '>Our most precious resouce is time- and the next decade will be defined by how we manage it </h1>

            <div className="flex items-center mt-6">
             <h2 className="font-bold  mr-2">Read the Article</h2>
             <FaArrowAltCircleRight />
            </div>

          
          </div>
      </div>


    </div>
  )
}

export default Middle 