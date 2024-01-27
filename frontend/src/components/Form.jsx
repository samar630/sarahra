import React, { useState } from 'react'

const Form = () => {
  const [mes, setMes] = useState("")
    const handleSubmit = (event) => {
      console.log(mes,'event')
      event.preventDefault();
      alert(`The message was submit`)
    }
  return (
   <div className=''>
      <form
       onSubmit={handleSubmit}
        className='mt-20 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base  blue_gradient text-head'>
           Message Al Sar7a7a
          </span>

          <textarea
            type='text'
            value={mes}
            onChange={(e) => setMes( e.target.value )}
            placeholder='Write your message here'
            className='form_textarea '
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <a href='/' className='text-gray-500 text-xl'>
            Cancel
          </a>
          <button
          
            
            className='px-5 py-1.5 text-xl  bg-primary-orange rounded-full green_gradient '
          >
            Submit
          </button>
        </div>
      </form>
   </div>
  )
}

export default Form
