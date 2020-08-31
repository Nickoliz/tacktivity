import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

function UnauthedHome() {
  return (
    <>
      <h1>Hello. Need an idea?</h1>
      <Login />
      <Signup />
    </>
  )
}


export default UnauthedHome;
