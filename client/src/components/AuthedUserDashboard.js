import React from 'react';
import { useSelector } from 'react-redux';
import '../../src/css/userdashboard.css';

export default function UserDashboard() {
  const user = useSelector(state => state.auth);


  return (
    <>
      <div className='user-information'>
        <div id='user-photo'>
          {/* ONCE MODEL UPDATED - UPDATE HERE */}
          {(user.profilePic) ?
            <img src={user.profilePic} alt='' />
            :
            <i className='fas fa-user-circle fa-10x' />
          }
        </div>
        <div id='user-real-name'>
          {user.firstName} {user.lastName}
        </div>
        <div id='user-information_username'>
          {(user.username) ?
            <div>@{user.username}</div>
            :
            null
          }
        </div>
      </div>
      <div className='board_navigation'>
        <div className='fas fa-plus fa-2x fa-plus-user' />
      </div>
    </>
  )
}
