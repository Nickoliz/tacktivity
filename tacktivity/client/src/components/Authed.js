import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../css/authed.css'

import DashPhotos from './DashPhotos';
import Logout from './Logout';
import SearchBar from './SearchBar';

import { loadPhotos } from '../store/photoReducer';


function Authed() {
  const [displayModal, setDisplayModal] = useState(null);
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  window.addEventListener("DOMContentLoaded", e => {
    dispatch(loadPhotos());
  })

  if (!currentUserId) return <Redirect to='/' />

  const toggleModal = () => {
    if (displayModal) {
      setDisplayModal(null);
    } else {
      setDisplayModal(<Logout hideModal={hideModal} />)
    }
  }

  const hideModal = () => {
    setDisplayModal(null);
  }


  return (
    <>
      <div>
        <div className="container">
          <i className="fas fa-thumbtack fa-2x thumb-authed left-icon" />
          <button className="home-button at-home left-icon" type='text'>Home</button>
          <SearchBar />
          <i className='fas fa-bell fa-2x right-icon' />
          <i className='fab fa-github fa-2x right-icon' />
          <i className='fas fa-user-circle fa-2x right-icon' />
          <i className='fas fa-chevron-down right-icon' onClick={e => toggleModal()} />
          <div className={displayModal ? 'show-chevron-modal' : 'hide-chevron-modal'}>
          </div>
          {displayModal}
        </div>
      </div>
      < DashPhotos />
    </>
  )
}


export default Authed;
