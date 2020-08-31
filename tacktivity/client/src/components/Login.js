import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(email.toLocaleLowerCase(), password));
  }

  return (
    <>
      <h2>Login Form Test</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type='password' name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <p>Forgot your password?</p>
        <button type='submit'>Log in</button>
      </form>
    </>
  )
}

export default Login;
