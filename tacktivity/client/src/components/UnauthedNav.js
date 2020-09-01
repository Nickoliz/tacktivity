// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState } from 'react';
import unauthedNav from '../css/unauthedNav.css';


function UnauthedNavbar() {
  const [modal, setModal] = useState('');

  return (
    <div>
      <div className="container">
        <span className="logo">
          <p>Tacktivity</p>
        </span>
        <button className="container-login-button" type='text'>
          Log in
        </button>
        <button className='container-login-button' type='text'>
          Sign up
        </button>
      </div>
    </div>
  )
}

export default UnauthedNavbar;
