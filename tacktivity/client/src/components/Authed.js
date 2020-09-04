import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/authed.css'

import Logout from './Logout';
import { Redirect } from 'react-router-dom';


function Authed() {
  const [displayModal, setDisplayModal] = useState(null);
  const [searchParam, setSearchParam] = useState('');
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

  const searchTerm = keyword => {
    setSearchParam(keyword);
  }

  // const onSearch = e => {
  //   e.preventDefault()
  //   console.log(searchParam);
  // }

  return (
    <>
      <div>
        <div className="container">
          <i className="fas fa-thumbtack fa-2x thumb-authed left-icon" />
          <button className="home-button left-icon" type='text'>Home</button>
          {/* <div className='search-icon'> */}
          {/* <span className='fas fa-search' /> */}
          {/* </div> */}
          <form className='form-tag'>
            <i className='fas fa-search'>
              <input type='text' placeholder='Search' className="search-bar" value={searchParam} onChange={e => searchTerm(e.target.value)} />
            </i>
          </form>
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
