import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/authed.css'

import Logout from './Logout';
import SearchBar from './SearchBar';
import CreateTack from './CreateTack';

import { loadPhotos } from '../store/photoReducer';
import CreateTackModal from './CreateTackModal';

// function Loading() {
//   return (
//     <>
//       <div className='fas fa-spinner is-loading' />
//       <div className='is-loading'>
//         Loading fresh tacks...
//       </div>
//     </>
//   )
// }

function Authed() {
  const [displayModal, setDisplayModal] = useState(null);
  const [createTackModal, setCreateTackModal] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  window.addEventListener("DOMContentLoaded", async () => {
    dispatch(loadPhotos());
  })

  if (!currentUserId) return <Redirect to='/' />

  const toggleOptionsModal = () => {
    if (displayModal) {
      setDisplayModal(null);
    } else {
      setDisplayModal(<Logout hideModal={hideModal} />)
    }
  }

  const toggleCreateTackModal = () => {
    if (createTackModal) {
      setCreateTackModal(null);
    } else {
      setCreateTackModal(<CreateTackModal hideModal={hideModal} />)
    }
  }

  const hideModal = () => {
    setDisplayModal(null);
  }

  return (
    <>
      <nav>
        <div className='fas fa-plus fa-2x' />
        {/* <div className='create-pin-modal' /> */}
        <div>
          <div className="container">
            <i className="fas fa-thumbtack fa-2x thumb-authed left-icon" onClick={e => toggleCreateTackModal()} />
            <NavLink to='/home' style={{ textDecoration: 'none' }} >
              <button className="home-button at-home left-icon" type='text' onClick={e => window.location.reload()}>Home</button>
            </NavLink>
            <SearchBar />
            <i className='fas fa-bell fa-2x right-icon' />
            <i className='fab fa-github fa-2x right-icon' />
            <i className='fas fa-user-circle fa-2x right-icon' />
            <i className='fas fa-chevron-down right-icon' onClick={e => toggleOptionsModal()} />
            <div className={displayModal ? 'show-chevron-modal' : 'hide-chevron-modal'}>
            </div>
            {displayModal}
            {createTackModal}
          </div>
        </div>
      </nav>
    </>
  )
}


export default Authed;
