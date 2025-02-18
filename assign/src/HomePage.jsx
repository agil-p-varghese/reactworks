import React from 'react'
{/*import {FaSearch,FaHome,FaComments,FaTicketAlt} from "react-icons/fa"*/}

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from blue-600 to purple-500 flex flex-col items-center'>
        {/*header part*/}
        <div className='w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center'>
        <div className='w-10 h-10 bg-white text-purple-600 font-bold flex items-center justify-center rounded-full'>U</div>  
        <div className='w-10 h-10 bg-white text-purple-600 font-bold flex items-center justify-center rounded-full'>U</div>  
        </div>
        {/*welcome message*/}
        <div className='mt-6 text-center px-4'>
            <h1 className='text-white text-xl font-bold'>Hello User!</h1>
            <p className='text-white text-lg'>How can we help?</p>
        </div>
        {/*chat card*/}
        <div className='w-11/12 mt-4 bg-blue-900 text-white p-4 rounded-xl shadow-md'>
        <p className='text-lg flex items-center'>
            <span className='text-2xl mr-2'>👋</span>
            Ask Anything, Get Answers in Under 2 Minutes - Instantly with vBot!
        </p>
        </div>
        {/*chatting input*/}

        {/*chatting imput over*/}
        {/* */}
        {/* bottom navigation*/}

        <div className='fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md'>
            <button className='flex flex-col items-center text-purple-600'>
                
                <span className='text-xs'>Home</span>
            </button>
            <button className='flex flex-col items-center text-purple-600'>
                
                <span className='text-xs'>Chats</span>
                
            </button>
            <button className="flex flex-col items-center text-gray-500">
          
          <span className="text-xs">Tickets</span>
        </button>

        </div>

    </div>
  );
}
