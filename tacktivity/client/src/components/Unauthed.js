// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState } from 'react';
import '../css/unauthed.css';
import '../css/login.css'
import Login from './Login';
import Signup from './Signup';

function Unauthed() {
  const [displayModal, setDisplayModal] = useState(null);


  const showModal = type => {
    if (type === 'login') {
      setDisplayModal(<Login hide={hideModal} />);
    } else if (type === 'signup') {
      setDisplayModal(<Signup />);
    }
  };

  const hideModal = () => {
    setDisplayModal(null);
  };

  return (
    <>
      <div className='unauthed-background'>
        <div className="container">
          <i className="fas fa-thumbtack fa-2x" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <div className="nav-space"></div>
          <button className="container-button" type='text' onClick={e => showModal('login')}>
            Log in
          </button>
          <button className='container-button' type='text' onClick={e => showModal('signup')}>
            Sign up
        </button>
        </div>
      </div>
      {!!displayModal && (
        <div className='overlay'>
          <button className='fas fa-times fa-2x' onClick={hideModal}></button>
          {displayModal}
        </div>
      )}
    </>
  )
}

export default Unauthed;
