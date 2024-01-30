import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../components/formInput/FromInput';
import '../components/stylecomponent.css'
const Login = (props) => {
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
        },2000)
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
         
           },3000)
          }
      const [buttonDisabled, setButtonDisabled] = useState(false);
        const dispatch = useDispatch();
        useEffect(() => {
         
          }, []);
  return (
    <div className='form__container__login'>
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
  )
}

export default Login
