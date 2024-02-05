import React, { useEffect } from 'react'
import CardMessage from '../components/CardMessage'
import Profile from '../components/Profile'
import { TiMessages } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
const Messges = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  function submitHandler() {
     dispatch(
          {
            type: 'GET_MESSAGE_REQUESTED',
           
            
        })  
       setTimeout(() =>{  
       },3000)
      }
      useEffect(() =>{
        submitHandler()
      },[])
  return (
    <section className='w-full mb-24  grid gap-[4rem]   md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[6rem]  grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
      <div className='md:ml-[4%] lg:ml-[7%] '>
       <Profile />
      </div>
   
    <div className='flex flex-col lg:mt-16 lg:mr-36 sm:mt-0 sm:mr-0 items-center justfy-center  gap-0'>
      <div className=' lg:w-[44rem] lg:h-[4rem] sm:w-[32rem] sm:h-[2rem]   border-2 border-solid border-gray-100  bg-white p-4 rounded-md  flex text-3xl gap-4 font-[600] flex-row justify-center items-center'>
        <span>
         <TiMessages />
        </span>
        <span>
        Messages
        </span>
      </div>
       <div className='grid gap-8 items-center justify-center'>
       {}
       </div>
      <button onClick={submitHandler}>tt</button>
    </div>
  </section>
  )
}

export default Messges
