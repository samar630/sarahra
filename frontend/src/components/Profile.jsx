import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
const Profile = () => {
  return (
    <div className='w-full items-center  flex-col '>
    <div className='mt-[4rem]  h-full flex justify-center  items-center '>
   <div class="w-[24rem] p-1 rounded  items-center overflow-hidden shadow-lg  ">
     <div className='relative'>
     <img class="w-full " src="/assets/images/bottle.jpg" alt="Sunset in the mountains"/>
     <div className='absolute bottom-0 left-[40%] '>
     <img className="w-[6rem] h-[6rem] rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sunset in the mountains"/>
     </div>
     </div>
    <div class="flex flex-col justify-center items-center text-center px-6 py-4">
    <div class="text-xl mb-2 text-center head_text ">Samar Qaddour</div>
    <div className='font-500 leading-[1.15] text-black sm:text-xl flex flex-row gap-16 p-3 left-[2rem] text-center items-center '>
         <div className='p-2 border-gray-300 border-l-2 border-r-2'>
         <button className='flex flex-col   items-center'>
        <span>
          Messages
        </span>
        <span className='font-bold'>
          0
        </span>
       </button>
         </div>
         <div className='p-2  border-gray-300 border-l-2 border-r-2'>
          <button className='bg-[#1b95e0]  gap-[2px] text-white  p-1 flex rounded w-[3rem] text-sm'>
            <FaTwitter className='mt-[1px]' color='#fff'/>
            <span>غرد</span>

          </button>
         </div>
         <div className='p-2 border-gray-300 border-l-2 border-r-2'>
         <button className='bg-[#1b95e0] gap-[2px] text-white p-1 flex rounded-md p-1 w-[4rem] text-sm'>
          <FaFacebook className='mt-[1px]' color='#fff'/>
            <span>Share</span>    
          </button>
         </div>
        </div>
    <p class="text-[#0CC8C9] text-xl bold">
      <a href='/text' > 
      Sarahah.top/u/samarkkewrefrd
      </a>
    </p>
  </div>
  <div class="px-6 pt-1 pb-2 text-[#0CC8C9] flex flex-col items-center">
    <span class="flex  gap-2  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         <FaTwitter className='mt-[2px] text-[#0CC8C9]' />
         <span className='text-[#0CC8C9]'>Share your account on Twitter</span>
      </span>
    <span class="flex   gap-2  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    <FaFacebook className='mt-[2px]  text-[#0CC8C9] ' /> 
    <span className=' text-[#0CC8C9] '>
    Share your account on Facebook
    </span>
      </span>
    <span class="flex  gap-2   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        <IoSettingsOutline className='mt-[2px]  text-[#0CC8C9]' /> 
          <span className=' text-[#0CC8C9]'>
          Account Setting
          </span>
      </span>
      <span className='text-black'>
      Advertising
      </span>
  </div>
</div>
    </div> 
    </div>
  )
}

export default Profile
