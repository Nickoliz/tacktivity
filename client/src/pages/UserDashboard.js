import React from 'react';
import { useSelector } from 'react-redux';
import Authed from '../components/Authed';
import '../../src/css/userdashboard.css';

export default function UserDashboard() {
  const user = useSelector(state => state.auth);

  return (
    <>
      <Authed />
      <div className='user-information'>
        <div id='user-photo'>
          <i className='fas fa-user-circle fa-10x' />
        </div>
        <div id='user-real-name'>
          {user.firstName, user.lastName}
        </div>
        <div id='username'>

        </div>
      </div>
    </>
  )
}
