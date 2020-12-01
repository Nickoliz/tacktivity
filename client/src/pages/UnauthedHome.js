import React from 'react';
import Unauthed from '../components/Unauthed';
import UnauthMosaic from '../components/UnauthMosaic';

function UnauthedHome() {
  const body = document.getElementById('body-id');
  body.classList.add('lock-scroll');


  return (
    <>
      <Unauthed />
      <UnauthMosaic />
    </>
  )
}


export default UnauthedHome;
