import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidMessageSquare } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import './stylecomponent.css'

const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

 useEffect(() =>{

 },[])
  return (
<nav className="h-[5rem] w-full flex justify-between "  style={{background:"#10BBB3"}}>
 
       <div className="flex mt-2 p-4 ml-4 gap-3">
           <img src='/assets/images/logo.png' alt='no photo' />
            <p className='text-white text-3xl sm:text-xl font-bold'>Sarahah</p>  
        </div> 
     <div className="flex mt-2 mr-16 p-2 ">   
        <div className="hidden lg:block md:block">
          <div className="flex space-x-4">
          <a href="/manager" className="flex gap-1 text-white hover:text-[#0c7773fc]  text-xl  rounded-md px-3 py-2 text-sm font-small">
              <IoSettingsOutline className='mt-1'/>
              <span>Account Setting</span>
              </a>
            <a href="/writemessage" className="flex gap-1 text-white hover:text-[#0c7773fc]  text-xl rounded-md px-3 py-2 text-sm font-small" aria-current="page">
            <BiSolidMessageSquare className='mt-1' />
               <span> My Messages</span> 
              </a>
            <a href="/cantact" className="flex gap-1 text-white hover:text-[#0c7773fc]  text-xl  rounded-md px-3 py-2 text-sm font-small">
               <IoCall className='mt-1' />
               <span> Contact Us</span>
              </a>
          
              <a href="/" className="flex gap-1 text-white hover:text-[#0c7773fc]  text-xl  rounded-md px-3 py-2 text-sm font-small">
              <IoLogOutOutline className='mt-1' />
              <span>LogOut</span>
              </a>
              <a href="/" className="flex gap-1 text-white hover:text-[#0c7773fc]  text-xl  rounded-md px-3 py-2 text-sm font-small">
              <HiLanguage className='mt-1' />
              <span> English </span>
              </a>
          </div>
        </div>
      </div>
      <div className="  sm:hidden z-index   w-[50%] ">
        <div className="relative flex h-16 items-center justify-between"> 
      <div className="absolute gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button onClick={handleClick} className="sm:hidden button relative rounded-full text-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          {click ?  <AiOutlineClose />  : <RxHamburgerMenu size={30} />  }
        </button>
      </div>
    </div>
    {click ? 
    <div className="sm:hidden " id="mobile-menu" style={{background:"#10BBB3",position:"absolute",zIndex:"10",width:"16rem",right:"0"}}>
      <div className="flex flex-col  items-center px-2 pb-3 pt-2 gap-3"   style={{background:"#10BBB3"}}>
      <a href="/manager" className="flex gap-1 text-white  rounded-md px-3 py-2 text-sm font-small">
              <IoSettingsOutline className='mt-1'/>
              <span>Accout Setting</span>
              </a>
       <a href="/writemessage" className="flex gap-1 text-white  rounded-md px-3 py-2 text-sm font-small" aria-current="page">
            <BiSolidMessageSquare className='mt-1' />
               <span> Messages</span> 
              </a>
            <a href="/cantact" className="flex gap-1 text-white  px-3 py-2 text-sm font-small">
               <IoCall className='mt-1' />
               <span> Contact Us</span>
              </a>
         
              <a href="/" className="flex gap-1 text-white  rounded-md px-3 py-2 text-sm font-small">
              <IoLogOutOutline className='mt-1' />
              <span>LogOut</span>
              </a>
              <a href="/" class="flex gap-1 text-white  rounded-md px-3 py-2 text-sm font-small">
              <HiLanguage className='mt-1' />
              <span>English</span>
              </a>
      </div>
    </div> : '' }
  </div>
  
</nav>
  )
}

export default Nav
