import React from 'react'
import Cards from './Cards'

const Popular = () => {
  return (
    <div >
        
    <h1 className='ml-32 text-xl' >Most Popular</h1>


    <div className='flex items-center justify-center m-10'>
  
    
    <Cards  title="WHAT'S NEW" heading="Introducing routing Forms: Screen and qualify people before they book with you" time="6 MINUTES" text="Ask site visitors questions to automatically present sceduling options based on answers " color="bg-purple-600" textcolor="white" borderbtn="white"/>
    <Cards  title="PRODUCTIVITY" heading="Calendly for Enterprise: Unlock scheduling efficiences for your entire..." time="8 MINUTES" text="Boost scheduling efficiency,scalabilty  purpose-built for large teams." color="bg-blue-600" textcolor="white"  borderbtn="white"/>
    <Cards  title="WHAT'S NEW" heading="Meeting the Polls: The easiest way for everyone to find time together" time="4 MINUTES" text=" Let invites vote on times to scedule events AND book the meeting all within Calendly" color="bg-blue-700" textcolor="white"  borderbtn="white"/>
    

    </div>
        
   </div>
  )
}

export default Popular