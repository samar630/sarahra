import React, { useEffect, useState } from 'react'
import { IoPerson } from "react-icons/io5";
import FormInput from './formInput/FromInput';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Modal from './modal/AreaModal';
const Informantion = (props) => {
  const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: ""
      })
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true
        },
        {
          id: 3,
          name: "age",
          type: "string",
          placeholder: "Birthday",
          label: "Birthday"
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values?.password,
          required: true
        }
      ]
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }
   
      let token = localStorage.getItem("token")
      const loading = useSelector((state) => state?.user?.loading)
      useEffect(() =>{
        console.log(loading, 'loading') 
      
      })
      const dispatch = useDispatch();
      const navigate = useNavigate();
      function submitHandler(e) {
        e.preventDefault();
         dispatch(
              {
                type: 'CREATE_USERS_REQUESTED',
                payload: { user: values, loading: false },
            })  
           setTimeout(() =>{
            <Modal showModal={showModal} setShowModal={setShowModal} />
           },3000)
          }
  return (
    <div className='flex flex-col p-2 m-8'>
      <div className=' '>
        <div className=''>
          <span className='flex text-xl font-bold gap-1 p-6 border-b-2  border-gray-300'>
             <span className='mt-1'>
              <IoPerson />
             </span>
            <span className='text-[#1e394]'>
                Delete Account
            </span>
          </span>
          <div className='mt-4 flex flex-col gap-4 p-4'>
            <p className='text-red-500'>
            You will lose all content and data on this account, such as incoming messages and photos  
            </p>
            <button className='hover:bg-[#a34914] ' style={{border:"1px solid #a34914",width:"8rem",padding: "8px", borderRadius: "5px",color: "#a34914"}}>
                <span  className='hover:hover:text-[#fff]'>
                Delete Account
                </span>
            </button>
          </div>
        </div>
      </div>
      <div className=' '>
        <div className=''>
          <span className='flex  text-xl font-bold gap-1 p-6 border-b-2  border-gray-300'>
             <span className='mt-1'>
              <IoPerson />
             </span>
            <span className='text-[#1e394]'>
               Edit personal information
            </span>
          </span>
           <form className='mt-8' onSubmit={submitHandler}>
            <div className='w-full p-2'>
            {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />

      ))}

            </div>
       <div className='have__account'>
         <span>Did you have an account</span>
        <button className='font-bold text-md' onClick={() => props.setRegister(false)} >Login</button>
       </div>
       <button  className='sun_btn'
       >
         {loading ?
         <div
         class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
         role="status">
         <span
           class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
           >Loading...</span>
       </div>
       : 'Verfiy && Login' }
       </button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Informantion
