import React, { useState } from 'react';
import '../css/authed.css'

import Logout from './Logout';

let modalClass = "hide-chevron-modal";
function Authed() {
  const [displayModal, setDisplayModal] = useState(null);


  const toggleModal = () => {
    if (modalClass === "hide-chevron-modal") {
      modalClass = "show-chevron-modal";
      setDisplayModal(<Logout />)
    } else if (modalClass === "show-chevron-modal") {
      modalClass = "hide-chevron-modal";
      setDisplayModal(null);
    }
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
          <div className={modalClass}>
          </div>
          {displayModal}
        </div>
      </div>
    </>
  )
}


export default Authed;
