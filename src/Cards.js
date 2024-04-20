import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Cards = ({ title, heading, time, text, color, textcolor, borderbtn }) => {
  return (
    <div className={`h-auto p-6 md:p-16 ${color} text-${textcolor} cursor-pointer rounded-xl shadow-lg w-full md:w-[24rem] mb-4 md:mb-8 border mr-8  border-slate-50`}>
      <h1 className={`mb-2 border border-${borderbtn} text-${borderbtn} rounded-full inline-block px-4 py-1`}>{title}</h1>
      <h1 className='text-lg md:text-2xl mb-2'>{heading}</h1>
      <h2 className='mb-2 text-sm md:text-lg'>READ TIME: {time}</h2>
      <p className="text-sm md:text-base">{text}</p>
      <div className="flex items-center mt-4 md:mt-6">
        <h2 className="font-bold mr-2">Read the Article</h2>
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
};

export default Cards;
