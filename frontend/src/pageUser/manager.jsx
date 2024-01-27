import React, { useState } from 'react';
import Profile from '../components/Profile';
import Informantion from '../components/Informantion';
import Login from '../components/Login';


const Manager = (props) => {
  const [register, setRegister] = useState(true)
  return (
 <div className='w-full gap-[10%] mb-[5%]  flex flex-row items-center justify-center grid gap-[4rem]  md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
  <div className=''>
  <Profile />
  </div>
  <div>
  {register ?  <Informantion  register={register} setRegister={setRegister} /> : <Login  register={register} setRegister={setRegister} />}
  
  </div>
 </div>
  )
}

export default Manager