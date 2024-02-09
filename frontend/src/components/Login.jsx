import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../components/formInput/FromInput';
import '../components/stylecomponent.css'
import { IoPerson } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
    const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Email",
          label: "Email",
          required: true
        },
      
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          label: "Password",
          required: true
        }
      
      
      ]
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
      }
      const handleClick = () =>{
        setButtonDisabled(true)
        setTimeout(()=>{
          setButtonDisabled(false)
         
        },4000)
      }
      
      const [values, setValues] = useState({
        email: "",
        password:"",
      })
      function submitHandler(e) {
        e.preventDefault();
         dispatch(
              {
                type: 'CREATE_LOGIN_REQUESTED',
                payload: { user: values, loading: false },
            })  
           setTimeout(() =>{
            navigate('/writemessage')
           },4000)
          }
      const [buttonDisabled, setButtonDisabled] = useState(false);
        const dispatch = useDispatch();
        useEffect(() => {
         
          }, []);
  return (
    <div className='flex flex-col p-2 m-8 justify-center '>
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
    <div className='form__container__login flex flex-col gap-4'> 
    <span className='flex  text-xl font-bold gap-1 p-6 border-b-2  border-gray-300'>
             <span className='mt-1'>
              <IoPerson />
             </span>
            <span className='text-[#1e394]'>
               Edit personal information
            </span>
          </span>   
      <form onSubmit={submitHandler} >
      {inputs.map((input) => (
      <FormInput
        key={input.id}
        {...input}
        value={values[input.name]}
        onChange={onChange}
      />
        ))}
     <div className='have__account'>
       <span>Didn't you have an account</span>
      <button className='font-bold text-md' onClick={() => props.setRegister(true)} >Register</button>
       </div>
     <button
         onClick={handleClick}
         className='sun_btn'
         >
              {buttonDisabled ?
           <div
           class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
           role="status">
           <span
             class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
             >Loading...</span>
         </div>
         : 'Login'}
         </button>
  </form>
  </div>
    </div>
 
  )
}

export default Login
