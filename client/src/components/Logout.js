import React from 'react';
import '../css/logout.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../store/auth'
import { clearPhotos } from '../store/photoReducer';

function Logout({ hideModal }) {
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();


  const logoutUser = () => {
    dispatch(clearPhotos());
    dispatch(logout());
  }

  if (!currentUserId) return <Redirect to="/" />

  return (
    <>
      <div onClick={hideModal} className='container-close' />
      <div onClick={hideModal} className='logout-container'>
        <div className='logout-container_box'>
          <p className='more-options'>More options</p>
          <div className='logout-container--button' onClick={e => logoutUser()}>Logout</div>
        </div>
      </div>
    </>
  )
}


export default Logout;
