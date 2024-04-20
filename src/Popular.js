import React from 'react';
import Cards from './Cards';

const Popular = () => {
  return (
    <div>
      <h1 className='ml-4 md:ml-32 mt-14 text-2xl font-semibold'>Most Popular</h1>
      <div className='flex flex-col md:flex-row items-center justify-center m-4 md:m-10'>
        <Cards
          title="WHAT'S NEW"
          heading="Introducing routing Forms: Screen and qualify people before they book with you"
          time="6 MINUTES"
          text="Ask site visitors questions to automatically present scheduling options based on answers"
          color="bg-purple-600"
          textcolor="white"
          borderbtn="white"
        />
        <Cards
          title="PRODUCTIVITY"
          heading="Calendly for Enterprise: Unlock scheduling efficiencies for your entire..."
          time="8 MINUTES"
          text="Boost scheduling efficiency, scalability purpose-built for large teams."
          color="bg-blue-600"
          textcolor="white"
          borderbtn="white"
        />
        <Cards
          title="WHAT'S NEW"
          heading="Meeting the Polls: The easiest way for everyone to find time together"
          time="4 MINUTES"
          text=" Let invites vote on times to schedule events AND book the meeting all within Calendly"
          color="bg-blue-700"
          textcolor="white"
          borderbtn="white"
        />
      </div>
    </div>
  );
};

export default Popular;
