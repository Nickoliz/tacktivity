import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/authed.css';

import Logout from './Logout';
import SearchBar from './SearchBar';
import CreateTackModal from './CreateTackModal';


export default function Authed() {
  const [displayModal, setDisplayModal] = useState(null);
  const [createTackModal, setCreateTackModal] = useState(null);
  const currentUserId = useSelector(state => state.auth.id);


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
        <div>
          <div className='fas fa-plus fa-2x open' onClick={e => toggleCreateTackModal()}></div>
          <div className={createTackModal ? 'show-plus-modal' : 'hide-plus-modal'} />
          {createTackModal}
          <div className="navbar-container">
            <i className="fas fa-thumbtack fa-2x thumb-authed left-icon" />
            <NavLink to='/home' style={{ textDecoration: 'none' }}>
              <button className='home-button left-icon' type='text'>Home</button>
            </NavLink>
            <SearchBar />
            <a href='https://www.linkedin.com/in/nicholaslitz' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin fa-2x right-icon' style={{ color: '#3792cb', textDecoration: 'none' }} /></a>
            <a href='https://angel.co/u/nick-litz' target="_blank" rel='noopener noreferrer'><i className='fa fa-angellist fa-2x right-icon' style={{ color: '#3792cb', textDecoration: 'none' }} /></a>
            <a href='https://www.github.com/nickoliz' target='_blank' rel='noopener noreferrer'><i className='fab fa-github fa-2x right-icon' style={{ textDecoration: 'none' }} /></a>
            <i className='fas fa-user-circle fa-2x right-icon' />
            <i className='fas fa-chevron-down right-icon' onClick={e => toggleOptionsModal()} />
            <div className={displayModal ? 'show-chevron-modal' : 'hide-chevron-modal'} />
            {displayModal}
          </div>
        </div>
      </nav>
    </>
  )
}
