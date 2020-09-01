import React from 'react';

function Authed() {
  return (
    <>
      <div>
        <div className="container">
          <i className="fas fa-thumbtack fa-2x" />
          <span className="logo">
            <p>Tacktivity</p>
          </span>
          <button className="container-button" type='text'>
            Home
          </button>
          <input className="search-bar" placeholder='Search for anything'></input>
          <i className='fas fa-bell fa-2x' />
          <i className='fas fa-comment-dots fa-2x' />
          <i className='fas fa-user-circle fa-2x' />
        </div>
      </div>
    </>
  )
}


export default Authed;
