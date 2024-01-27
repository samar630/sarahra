import React, { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_z8milc4', 'template_7yoekn8', form.current, 'oHadp6--rVbjiQu3e')
            e.target.reset()
    };
  return (
    <section className='w-full h-[70vh] max-w-full flex mt-20  justify-center items-center flex-col'>
      <div>
         <span className='font-bold '>You can contact us by filling in the form below</span>
      </div>
    <form
     ref={form}
      onSubmit={sendEmail}
      className='mt-10 w-full  items-center justify-center text-center flex flex-col gap-3 '
    >
        <div className='p-2 block flex-col gap-4'>
        <label className=''>
          <span className='mr-3 font-bold'>Email</span>
        <input
          type='text'
          name='name'
          required
          style={{outline:'none'}}
          className='h-[2.7rem] lg:w-[42rem] md:w-[24rem] sm:[14rem] p-2  rounded-md border  border-[#e6e7e7]'
        /> 
        </label>
        </div>
        <div className='p-2 block flex-col gap-4'>
        <label className=''>
          <span className='mr-3 font-bold'>Email</span>
        <input
          type='text'
          name='email'
          required
          style={{outline:'none'}}
          className='h-[2.7rem] lg:w-[42rem] md:w-[24rem] sm:[14rem] p-2  rounded-md border  border-[#e6e7e7]'
        /> 
        </label>
        </div>
         <div className='p-2 mr-5 block flex-col gap-4'>
          <label className='flex flex-row items-center  justify-center'>
          <span className='mr-3 font-bold'>Message</span>
          <textarea
          rows='6'
          required
          name='message'
          className='p-2  lg:w-[42rem] md:w-[24rem] sm:[14rem]  rounded-md border  border-[#e6e7e7]'
          style={{outline:'none'}}
        />
        </label>
        </div>
        <button className='items-left text-sm text-[#10BBB3] rounded-sm border  border-[#10BBB3] w-24 h-10'>
              Send
       </button>  
    </form>
  </section>
  )
}

export default Contact
