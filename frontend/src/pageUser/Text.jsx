import React, { useState } from 'react'
import { FaPencil } from "react-icons/fa6";
import {useDispatch} from 'react-redux'
const Text = () => {
  const dispatch = useDispatch()
  const [msg , setMsg] = useState('')
  const onChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value })
  }
  function submitHandler(e) {
    e.preventDefault();
     dispatch(
          {
            type: 'CREATE_MESSAGE_REQUESTED',
            payload: { message: msg, loading: false },
        })  
       setTimeout(() =>{
     
       },3000)
      }
  return (
   <section className='flex flex-col  items-center justify-center'>
     <form onSubmit={submitHandler}  className='rounded-sm  gap-7 lg:w-[40%] sm:w-[60%] h-[80vh] bg-white p-4 m-8 flex flex-col items-center justify-center'>
         <div className='flex p-4 gap-6 flex-col items-center justify-center'>
           <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            className='w-16 h-16' style={{borderRadius:"50%"}} />
           <span className='font-satoshi font-semibold text-base   text-head'>
           Leave a constructive message :)
           </span>
         </div> 
         <textarea  rows="6"
         name='massege'
         onChange={onChange}
          className="block p-2.5 w-[80%]  text-sm text-gray-900  rounded-md border  border-[#10BBB3]" 
         style={{outline:'none'}}
        
         ></textarea>
         <button  className='flex justify-center text-sm items-center gap-1 text-[#10BBB3] rounded-sm border  border-[#10BBB3] w-24 h-10'>
            <span>
                <FaPencil />
            </span>
            <span>
              Send
            </span>
            </button>
            <span className='text-gray-600'>Advertising</span>
     </form>
   </section>
  )
}

export default Text
