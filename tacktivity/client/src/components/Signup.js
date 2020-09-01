import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth';
import { Redirect } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(email.toLocaleLowerCase(), password));
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <>
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
          <input type='text' className='login-input' name='age' value={age} placeholder='Age' onChange={e => setAge(e.target.value)} />
          <div>
            <button type='submit' className='login-button'>Continue</button>
          </div>
        </form>
        <div className='signup-redirect'>
          Already a member? Log in
        </div>
      </div>
    </>
  )
}

export default Signup;
