// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState, useEffect } from 'react';
import '../css/unauthed.css';
import '../css/login.css'
import Login from './Login';
import Signup from './Signup';
import AuthModal from './AuthModal';

function Unauthed() {
  const [displayModal, setDisplayModal] = useState(null);


  const showModal = type => {
    if (type === 'login') {
      setDisplayModal(<Login />);
    } else if (type === 'signup') {
      setDisplayModal(<Signup />);
    }
  };

  const hideModal = () => {
    setDisplayModal(null);
  };

  return (
    <>
      <div>
        <div className="container">
          <i class="fas fa-thumbtack fa-2x" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <button className="container-button" type='text' onClick={e => showModal('login')}>
            Log in
          </button>
          <button className='container-button' type='text' onClick={e => showModal('signup')}>
            Sign up
        </button>
        </div>
      </div>
      {!!displayModal && (
        <div>
          <div >
            <button onClick={hideModal}>
            x
            </button>
          </div>
          {displayModal}
        </div>
      )}
    </>
  )
}

export default Unauthed;
