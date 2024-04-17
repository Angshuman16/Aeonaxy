import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-blue-950 h-[24rem] w-full mt-4 flex items-center justify-center mr-24'>

        <div className='mr-24'>

            <h1 className='text-white text-xl mb-10'>STAY UPDATED</h1>

            <h1 className='text-white text-4xl font-bold mb-8 w-[17rem] ' >Subscribe to the newsletters</h1>

            <h1 className='text-white font-xl mb-4 w-[26rem] '>Submit your email, and once a month we will send you our best time saving articles,videos and other resources</h1>


        </div>

        <div className='bg-white p-7 h-[18rem] rounded-lg  m-4'>
            <forms>
                <div>
                <label className='font-semibold mb-4 '> First Name</label>
                <label className='ml-28 font-semibold mb-2'> Last Name</label>
                </div>

                <div>
               
               <input type="text" placeholder='First Name' className='border border-slate-200  mr-2 mt-2 h-10 rounded-lg placeholder:px-2 '></input>
               
                <input type='text' placeholder=' Last Name' className='border border-slate-200  h-10 mt-2 rounded-lg placeholder:px-2'></input>
                </div>
                 

                 <div className='mt-8'>
                <label className='mt-4  ml-2 font-semibold'>Email Address</label>
               
                </div>

                <div className=''>
                <input type='email' placeholder='Enter your email address' className='border border-slate-200 ml-2 mt-2 h-10 rounded-lg placeholder:px-2 w-full '></input>
                </div>


                <button className='bg-blue-500 text-white text-center w-full flex items-center justify-center rounded-full  hover:bg-blue-600 mt-6 h-10 '>Submit </button>
            </forms>
        </div>

    </div>
  )
}

export default Subscription