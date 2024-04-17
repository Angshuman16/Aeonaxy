import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Cards = ({title,heading,time,text,color,textcolor,borderbtn}) => {
  return (

    <div className={`h-auto p-16 ${color}   text-${textcolor} mr-9 cursor-pointer rounded-xl shadow-lg w-[24rem] mb-8 border border-slate-50` }>
  
     <h1 className={`mb-4 border border-${borderbtn}  text-${borderbtn} rounded-full inline-block px-4 py-2`}>{title}</h1>


     <h1 className='text-2xl mb-2'>{heading} </h1>

     <h2 className='mb-2'>READ TIME: {time}</h2>

     <span >{text}</span>


     <div className="flex items-center mt-6">
             <h2 className="font-bold  mr-2">Read the Article</h2>
             <FaArrowAltCircleRight />
            </div>


     
       

    </div>
  )
}

export default Cards