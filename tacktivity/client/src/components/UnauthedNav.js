// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState, useEffect } from 'react';
import '../css/unauthedNav.css';
import Login from '../components/Login';
import Signup from '../components/Signup';

function UnauthedNavbar() {
  const [displayModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!showModal);
  }

  return (
    <>
      <div>
        <div className="container">
          <i class="fas fa-thumbtack fa-2x" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <button className="container-login-button" type='text' onClick={e => setLoginModal(true)}>
            Log in
        </button>
          <button className='container-login-button' type='text' onClick={e => setSignupModal(true)}>
            Sign up
        </button>
        </div>
      </div>
      <Login />
      <Signup />
    </>
  )
}

export default UnauthedNavbar;
