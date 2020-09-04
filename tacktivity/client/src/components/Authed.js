import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/authed.css'

import Logout from './Logout';
import { Redirect } from 'react-router-dom';




function Authed() {
  const [displayModal, setDisplayModal] = useState(null);
  const currentUserId = useSelector(state => state.auth.id);

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
          <button className="home-button left-icon" type='text'>Home</button>
          <div className='search-icon'>
            <span className='fas fa-search' />
          </div>
          <input type='textbox' disabled='disabled' placeholder='Search for things...' className="search-bar" />
          <i className='fas fa-bell fa-2x right-icon' />
          <i className='fas fa-comment-dots fa-2x right-icon' />
          <i className='fas fa-user-circle fa-2x right-icon' />
          <i className='fas fa-chevron-down right-icon' onClick={e => toggleModal()} />
          <div className={displayModal ? 'show-chevron-modal' : 'hide-chevron-modal'}>
          </div>
          {displayModal}
        </div>
      </div>
    </>
  )
}


export default Authed;
