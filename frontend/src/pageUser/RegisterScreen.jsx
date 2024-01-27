import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../components/stylecomponent.css'
import FormInput from '../components/formInput/FromInput';
import { CREATE_USERS_REQUESTED, SET_LOADING } from '../redux/actions/auth-action';
import Modal from '../components/modal/AreaModal';


const RegisterScreen = ( ) => {
  const [showModal, setShowModal] = useState(true);
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
  let token = localStorage.getItem('token')
  const loading = useSelector((state) => state?.user?.loading)
  useEffect(() =>{
    console.log(loading, 'loading') 
    console.log(token, "tokennnnnnn")
  })
 
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
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
   <div className='form__container'>
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
         <span>Did you have an account</span>
        <a href='/login'>Login</a>
       </div>
       <button
      
       className='sun_btn'
       >
         {loading ?
         <div
         class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
         role="status">
         <span
           class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
           >Loading...</span>
       </div>
       : 'Verfiy && Login'}
       </button>
     </form>
   </div>

  )
}


export default RegisterScreen



