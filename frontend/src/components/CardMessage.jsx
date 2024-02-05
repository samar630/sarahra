import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaShare } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import Text from '../pageUser/Text';
const CardMessage = (props) => {
  const [type, setType] = useState('update')
 const [message, setMessage] = useState(props.message)
 const [click, setClick] = useState(false)
 const onChange = (e) => {
  setMessage({ ...message, [e.target.name]: e.target.value })
}
const dispatch = useDispatch()
function submitHandler(e) {
 
  e.preventDefault();

   dispatch(
        {
          type: 'UPDATA_MESSAGE_REQUESTED',
          payload: { message: message, loading: false },
      })  
     setTimeout(() =>{
   
     },3000)
    }
 useEffect(() =>{
  console.log(message,'message')
 
 },[])
  return (
    <>
    <div className='
    border-[3px] rounded-lg border-solid border-[#10BBB3]
    bg-white lg:w-[44rem] lg:h-[14rem] sm:w-[32rem] sm:h-[14rem]  p-8 '>
       <div className='flex flex-col gap-4'>
      <p className='my-4  font-bold text-md text-gray-700'>
      {props.message}
      </p>
      <p
        className='font-inter text-sm text-gray-500 cursor-pointer'
      >
       {props.createdAt}
      </p>
        <div className='flex flex-row mt-8 justify-between'>
          <div class="flex items-center ps-3">
            <label for="list" class="w-full py-3 ms-2 text-red-600 font-medium text-gray-900 text-xl ">
            <button
             onClick={() => setClick(true)}
            >
              Edit
              
           </button>
            </label>
        </div>
        <div className='flex text-2xl gap-4'>
              <FaShare className='text-red-600 ' />
              <FaFacebook  className='text-[#10BBB3]'/>
              <FaTwitter className='text-[#10BBB3]' />
             
          </div>
        </div>
     
    </div>
    </div>
    {click ? <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
         <Text type={type} />
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button   onClick={() => setClick(false)} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
    </div> : ''}
    </>
  )
}

export default CardMessage
