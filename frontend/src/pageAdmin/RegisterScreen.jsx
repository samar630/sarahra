import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setCredentails} from '../slices/authSlice';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, {isLoading}] = useRegisterMutation();
    const {userInfo} = useSelector((state) => state.auth)
    useEffect(() => {
      if (userInfo) {
        navigate('/');
        console.log(userInfo.password, 'userInfo')
      }
    }, [navigate, userInfo]);
    const submitHandler = async (e) => {
      e.preventDefault();
  
        try {
          const res = await register({name, email, age, password}).unwrap();
          dispatch(setCredentails({ ...res }));
          navigate('/');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      
    };
  return (
    <form onSubmit={submitHandler}>
   
        <div className="form-control">
          <label>name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => (setUsername(e.target.value))}
          />  <div className="form-control">
          <label>userName</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => (setName(e.target.value))}
          />
        </div>
        </div>

        <div className="form-control">
        <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
    
        </div>
        <div className="form-control">
        <label>age</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => (setAge(e.target.value))}
          />
    
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      <button>Resister</button>
  </form>

  )
}

export default RegisterScreen
