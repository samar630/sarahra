import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaShare } from "react-icons/fa";
const CardMessage = () => {
  return (
    <div className='
    border-[3px] rounded-lg border-solid border-[#10BBB3]
    bg-white lg:w-[44rem] lg:h-[14rem] sm:w-[32rem] sm:h-[14rem]  p-8 '>
       <div className='flex flex-col gap-4'>
      <p className='my-4  font-bold text-md text-gray-700'>
        Lorem ipsum is a placeholder text
      </p>
      <p
        className='font-inter text-sm text-gray-500 cursor-pointer'
      >
       1/23/2024 9:53:07 PM
      </p>
        <div className='flex flex-row mt-8 justify-between'>
          <div class="flex items-center ps-3">
            <input id="list" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded outline-none focus:bg-red-500"/>
            <label for="list" class="w-full py-3 ms-2 text-red-600 font-medium text-gray-900 text-xl ">Make Public</label>
        </div>
        <div className='flex text-2xl gap-4'>
              <FaShare className='text-red-600 ' />
              <FaFacebook  className='text-[#10BBB3]'/>
              <FaTwitter className='text-[#10BBB3]' />
             
          </div>
        </div>
     
    </div>
    </div>
  )
}

export default CardMessage
