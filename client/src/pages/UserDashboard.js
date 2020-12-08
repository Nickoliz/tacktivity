import React from 'react';
import { useSelector } from 'react-redux';
import Authed from '../components/Authed';

export default function UserDashboard() {
  const user = useSelector(state => state.auth);

  console.log(user)

  return (
    <>
      <Authed />
      <div className='user-information'>
        <div id='user-photo'>
          {/* <img src={user} /> */}
        </div>
        <div id='user-real-name'>

        </div>
        <div id='username'>

        </div>
      </div>
    </>
  )
}
