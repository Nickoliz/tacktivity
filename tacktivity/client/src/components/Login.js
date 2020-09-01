import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import '../css/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email.toLocaleLowerCase(), password));
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <>
      <div className='modal'>
        <div className="login-container">
          <i className="login-thumbtack" class='fas fa-thumbtack fa-3x' />
          <h3>Welcome to Tacktivity</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input type='email' className='login-input' name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <input type='password' className='login-input' name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <button type='submit' className='login-button'>Log in</button>
            </div>
          </form>
          <div className='form-break' />
          <div className='signup-redirect'>
            Not on Tacktivity yet? Sign up
        </div>
        </div>
      </div>
    </>
  )
}

export default Login;
