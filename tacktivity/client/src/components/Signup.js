// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signup } from '../store/auth';
// import { Redirect } from 'react-router-dom';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const currentUserId = useSelector(state => state.auth.id);
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(signup(email.toLocaleLowerCase(), password));
//   }

//   if (currentUserId) return <Redirect to='/' />

//   return (
//     <>
//       <h2>Signup Form Test</h2>
//       <form onSubmit={handleSubmit}>
//         <input type='text' name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
//         <input type='password' name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
//         <p>Forgot your password?</p>
//         <button type='submit'>Log in</button>
//       </form>
//     </>
//   )
// }

// export default Signup;
