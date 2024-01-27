import React from 'react'

const Footer = () => {
  return (
    <section className='mt-8 flex flex-col gap-8'>
        <div className='w-full flex justify-center items-center'  style={{background:'rgba(16, 187, 179, 0.11)'}}>
      <div className='w-[90%] grid gap-[4rem] sm:gap-0 grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 '>
      <div className=' p-8 flex flex-col gap-4 sm:gap-2'>
        <h3 className='font-bold text-xl text-[#3d3d3d]'>
        1. Create your personal feedback URL.
         <a className='text-[#0CC8C9]' href='/'>Here</a>
        </h3>
        <p className='text-xl'>
        People will write anonymous and honest opinions 
        about you on that URL.
        </p>
       </div>
       <div className='p-8  flex flex-col gap-4 sm:gap-2'>
        <h3 className='font-bold text-xl text-[#3d3d3d]'>
        2.Share the URL through Instagram,
        Twitter, Facebook etc.
        </h3>
       </div>
       <div className='p-8 flex flex-col gap-4 sm:gap-2'>
        <h3 className='font-bold text-xl text-[#3d3d3d]'>
        3. Read what people think about you.
        </h3>
        <p className='text-xl'>
        The feedback you receive is private - 
        only you can see it.
        </p>
       </div>
       <div className='p-8 flex flex-col gap-4 sm:gap-2'>
        <h3 className='font-bold text-xl text-[#3d3d3d]'>
        4. Publish your favorite feedbacks.
        </h3>
        <p className='text-xl'>
        The feedback you receive is private -
         only you can see it.
        </p>
       </div>
      </div>
    </div>
         <div className='flex flex-col items-center justify-center'>
        <ul className='p-2 m-2 mt-2 justify-center items-center sm:gap-2 font-bold text-2xl  w-[70%] grid gap-[4rem] sm:gap-0 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4'>
         <li>
           Give Us Feedback
         </li>
         <li>
           Privacy Policy
          </li>
           <li>    
             Join Group on Facebook
          </li>
          <li>
           Follow Us On Facebook
          </li>
        </ul>
         <div className='text-[#787d7d] p-2 m-2 mb-4'>
         All rights reserved. © Saraha Top Website 2016 - 2024
         </div>
      </div>
    </section>
  

  )
}

export default Footer
