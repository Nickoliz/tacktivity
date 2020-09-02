import React, { useState } from 'react';
import '../css/authed.css'

import Logout from './Logout';

function Authed() {
  const [displayModal, setDisplayModal] = useState(null);

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
          <span>
            <i className='fas fa-chevron-down right-icon' />
            <Logout />
            {!!displayModal && (
              <div>
                {displayModal}
              </div>
            )}
          </span>
        </div>
      </div>
    </>
  )
}


export default Authed;
