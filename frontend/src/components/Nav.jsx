import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidMessageSquare } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import './stylecomponent.css'
const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  // const {userInfo} = useSelector((state) => state?.auth)
  // const userRole = userInfo?.data?.newUser?.role
 useEffect(() =>{
// console.log(userInfo, 'userInfonew')
// console.log(userRole, 'userRole')
 },[])
  return (
    // <div className="navbar">
    //   <div className="container">
    //     <div className='logo'>
    //     <p className='blue_gradient head_text bold'>sara7a7a
    //     </p>
    //     </div>
    //     <ul className={click ? "nav active" : "nav"}>
    //       <div className='nav__container '>
    //       <li className="nav-item">
    //         <a href="/"  className='orange_gradient'>My Messages</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="/"  className='orange_gradient' >Contact Us</a>
    //       </li>
    //       <li className="nav-item">
    //         <a href="/"  className='orange_gradient'>Setting</a>
    //       </li>
    //       {userRole === 'amin' ?  <li className="nav-item">
    //         <a href="/getUser"  className='orange_gradient'>User</a>
    //       </li> : ''}
    //       </div>
    //       <div className='container__btn'>
    //       <button  className='black_btn'>
    //         <a href='/register'>
    //         Register
    //         </a>
    //        </button>
    //       <button className='outline_btn'>Logout</button>
    //     </div>
    //     </ul>
    //     <div onClick={handleClick} className="hamburger">
    //       {click ? (
    //         <AiOutlineClose className="icon" size={35}/>
    //       ) : (
    //         <AiOutlineMenu className="icon" size={35} />
    //       )}
    //     </div>
      
    //   </div>
    // </div>
<nav className="w-full" style={{background:"#10BBB3"}}>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">  
      <div className="flex flex-1  justify-center sm:items-stretch sm:justify-start">
        <div className="flex  gap-3">
           <img src='/assets/images/logo.png' alt='no photo' />
            <p className='blue_gradient text-3xl  font-bold'>Sarahah</p>
           
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 ml-[4rem]">
            <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl rounded-md px-3 py-2 text-sm font-small" aria-current="page">
            <BiSolidMessageSquare className='mt-1' />
               <span> My Messages</span> 
              </a>
            <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
               <IoCall className='mt-1' />
               <span> Contact Us</span>
              </a>
            <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
            
              <IoSettingsOutline className='mt-1'/>
              <span>Setting</span>
              </a>
              <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
              <IoLogOutOutline className='mt-1' />
              <span>LogOut</span>
              </a>
          </div>
        </div>
      </div>
      <div className="absolute gap-3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           <div className='mr-3'>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>
          <div className=' hidden sm:block '>
          <div className='flex gap-3'>
            <button className='black_btn'>
              <a href='/register'>
              Sign Up
              </a>
            </button>
          
          </div>
          </div>
        <button onClick={handleClick} className="sm:hidden button relative rounded-full text-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          {click ?  <AiOutlineClose />  : <RxHamburgerMenu size={30} />  }
        </button>
      </div>
    </div>
  </div>
   {
    click ? 
    <div className="sm:hidden" id="mobile-menu">
     
      <div className="flex flex-col items-center px-2 pb-3 pt-2 gap-3">
       <button className='black_btn'>Sign Up</button>
       <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl rounded-md px-3 py-2 text-sm font-small" aria-current="page">
            <BiSolidMessageSquare className='mt-1' />
               <span> My Messages</span> 
              </a>
            <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
               <IoCall className='mt-1' />
               <span> Contact Us</span>
              </a>
            <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
            
              <IoSettingsOutline className='mt-1'/>
              <span>Setting</span>
              </a>
              <a href="/" class="flex gap-1 text-white hover:bg-white hover:text-blue-500 text-xl  rounded-md px-3 py-2 text-sm font-small">
              <IoLogOutOutline className='mt-1' />
              <span>LogOut</span>
              </a>
 
      </div>
    </div> : '' }
</nav>
  )
}

export default Nav
