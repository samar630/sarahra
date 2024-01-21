import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentails } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const [login, { isLoading }] = useLoginMutation();
      const { userInfo } = useSelector((state) => state.auth);
    //   useEffect(() => {
    //     if (userInfo) {
    //       navigate('/');
    //     }
    //   }, [navigate, userInfo]);
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentails({ ...res }));
          navigate('/');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };
  return (
    <div>
      <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
          <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
          />
        </div>
        </div>
        <button> submit</button>
      </form>
    </div>
  )
}

export default LoginScreen
