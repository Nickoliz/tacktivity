// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState, useEffect } from 'react';
import '../css/unauthedNav.css';
import Login from '../components/Login';

function UnauthedNavbar() {
  const [modal, setModal] = useState(false);

  useEffect(() => {

  }, [Login]);

  return (
    <>
      <div>
        <div className="container">
          <i class="fas fa-thumbtack fa-2x" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <button className="container-login-button" type='text' onClick={e => setModal(true)}>
            Log in
        </button>
          <button className='container-login-button' type='text'>
            Sign up
        </button>
        </div>
      </div>
      <Login />
    </>
  )
}

export default UnauthedNavbar;
