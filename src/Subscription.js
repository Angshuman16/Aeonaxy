import React from 'react';

const Subscription = () => {
  return (
    <div className='bg-blue-950 w-full min-h-[24rem]  flex flex-col md:flex-row items-center justify-center'>

      <div className='w-full md:w-auto md:mr-24'>
        <h1 className='text-white text-xl mb-6 md:mb-10'>STAY UPDATED</h1>
        <h1 className='text-white text-4xl font-bold mb-6 md:mb-8 w-full md:w-[17rem]'>Subscribe to the newsletters</h1>
        <h1 className='text-white font-xl mb-6 md:mb-4 w-full md:w-[26rem]'>Submit your email, and once a month we will send you our best time-saving articles, videos, and other resources</h1>
      </div>

      <div className='bg-white p-7 md:h-[18rem] rounded-lg m-4 w-full md:w-auto '>
        <form>
          <div className='flex flex-col md:flex-row mb-6'>
            <div className='md:mr-2'>
              <label className='font-semibold mb-2'>First Name</label>
              <input type="text" placeholder='First Name' className='border border-slate-200 h-10 rounded-lg placeholder:px-2 mb-2 md:mb-0 w-full md:w-auto'></input>
            </div>
            <div>
              <label className='font-semibold mb-2'>Last Name</label>
              <input type='text' placeholder='Last Name' className='border border-slate-200 h-10 rounded-lg placeholder:px-2 w-full md:w-auto'></input>
            </div>
          </div>

          <div className='mb-6'>
            <label className='font-semibold mb-2'>Email Address</label>
            <input type='email' placeholder='Enter your email address' className='border border-slate-200 h-10 rounded-lg placeholder:px-2 w-full'></input>
          </div>

          <button className='bg-blue-500 text-white w-full flex items-center justify-center rounded-full hover:bg-blue-600 h-10'>Submit</button>
        </form>
      </div>

    </div>
  );
}

export default Subscription;



