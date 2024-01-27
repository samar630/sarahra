import React from 'react';
import { FaFacebook } from 'react-icons/fa';


const Home = () => {
  return (
 <div className='w-full h-full'>
    <div className='grid lg:gap-[30%] md:gap-2 sm:gap-2  lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-2 pt-16 pb-16 pl-24 pr-24'>
      <div className='flex flex-col  gap-8'>
         <div className='flex flex-col gap-4'>
         <h1 className='text-4xl font-bold'>Are you ready to face frankness?</h1>
          <p className='text-2xl font-500 text-gray-600'>Get honest feedback from your coworkers and friends.</p>
         </div>
          <div className='grid gap-8  lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-2 '>
          <div className='flex flex-col'>
          <h2 className='font-bold text-2xl relative'>
          At work
          </h2>
            <ul className=' list-disc pt-5 pl-16 text-xl flex flex-col gap-3 '>
              <li>Strengthen Areas for Improvement</li>
              <li>Enhance your areas of strength</li>
            </ul>
         </div>
         <div className='flex flex-col'>
          <h2 className='font-bold text-2xl relative'>With Your Friends</h2>
          <ul className=' list-disc pt-5 pl-16 text-xl flex flex-col gap-3 left-20 top-[19rem]'>
            <li>Improve your friendship</li>
            <li>Let your friends be honest with you</li>
          </ul>
         </div>
          </div>
          <div className='font-[600] text-xl flex gap-2 pl-16 pt-4 text-[#0CC8C9]'>
          <button>
            <a href='/manager'>
              Register
            </a>
          </button>
          <span>
            |
          </span>
          <button>
            <a href='/manager'>
              Login
            </a>
          </button>
         </div>
      </div>
      <div className='flex flex-col lg:p-8 md:p-0 sm:p-0 gap-4'>
        <h1  className='lg:text-2xl md:text-md font-bold'>Follow us on Facebook</h1>
        <div className='bg-white lg:p-2 md:p-0 sm:p-0 lg:h-[8.5rem] sm:h-[7.5rem] lg:w-[30rem] sm:w-[50rem] '>
        <div className='flex flex-row gap-2'>
        <div className='p-4'>
          <img src='/assets/images/messages.jpg' className='border-2 border-black sm:w-8 sm:h-8 lg:w-24 lg:h-24 '/>
        </div>
         <div className='flex flex-col gap-4'>
         <div className='flex flex-row gap-4'>
          <div className='flex flex-row gap-2 lg:text-xl  sm:text-sm font-bold text-blue-500 mt-4'>
           <span>Sarahah</span>
           <span>صراحة</span>
          </div>
           </div>
          <div className='flex gap-2  '>
           <button className='flex items-center justify-center gap-2  lg:p-4 md:p-0 rounded-md bg-gray-100'>
             <FaFacebook className='text-blue-500 lg:h-6  lg:w-6 sm:h-2 sm:w-2' />
             <span className='  lg:text-xl md:text-md  sm:text-sm font-bold text-gray-500 '>Follow page</span>
           </button>
           <p className='sm:hidden lg:block md:hidden  lg:p-3 md:p-0 sm:p-0 sm:p-0  lg:text-xl md:text-md  sm:text-sm '>195K followers</p>
          </div>
         </div>
        </div>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Home
