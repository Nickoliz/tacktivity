import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import UnauthedNav from '../components/UnauthedNav';

function UnauthedHome() {
  return (
    <>
      <UnauthedNav />
      <h1>Hello. Need an idea?</h1>
      <Login />
      <Signup />
    </>
  )
}


export default UnauthedHome;
