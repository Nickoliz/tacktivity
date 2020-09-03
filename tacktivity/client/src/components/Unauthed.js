// Signup and Login Buttons - remember Material
// Logo and all
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/unauthed.css';
import Login from './Login';
import Signup from './Signup';

function Unauthed() {
  const [displayModal, setDisplayModal] = useState(null);
  const currentUserId = useSelector(state => state.auth.id);

  if (currentUserId) return <Redirect to='/home' />

  const showModal = type => {
    if (type === 'login') {
      setDisplayModal(<Login showModal={showModal} />);
    } else if (type === 'signup') {
      setDisplayModal(<Signup showModal={showModal} />);
    }
  };

  const hideModal = () => {
    setDisplayModal(null);
  };

  return (
    <>
      <div className='unauthed-background'>
        <div className="container">
          <i className="fas fa-thumbtack fa-2x thumbtack-logo" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <div className="nav-space"></div>
          <button className="container-button" type='text' onClick={e => showModal('login')}>
            Log in
          </button>
          <button className='container-button signup' type='text' onClick={e => showModal('signup')}>
            Sign up
          </button>
        </div>
      </div>
      {!!displayModal && (
        <div className='modal-overlay'>
          <button className='fas fa-times fa-lg' onClick={hideModal}></button>
          {displayModal}
        </div>
      )}
    </>
  )
}

export default Unauthed;
