import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/unauthed.css';
import Login from './Login';
import Signup from './Signup';

export default function Unauthed() {
  const [displayModal, setDisplayModal] = useState(null);
  const currentUserId = useSelector(state => state.auth.id);

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

  if (currentUserId) return <Redirect to='/home' />

  return (
    <>
      <div className='unauthed-background'>
        <div className="navbar-container">
          <i className="fas fa-thumbtack fa-2x thumbtack-logo" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <div className="nav-space"></div>
          <a href='https://www.linkedin.com/in/nicholaslitz' target='_blank'rel='noopener noreferrer'><i className='fa fa-linkedin fa-2x right-icon' style={{ color: '#3792cb', textDecoration: 'none' }} /></a>
          <a href='https://angel.co/u/nick-litz' target="_blank" rel='noopener noreferrer'><i className='fa fa-angellist fa-2x right-icon' style={{ color: '#3792cb', textDecoration: 'none' }} /></a>
          <a href='https://www.github.com/nickoliz' target='_blank' rel='noopener noreferrer'><i className='fab fa-github fa-2x right-icon' style={{ textDecoration: 'none' }} /></a>
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
