import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../store/boardReducer';
import '../../src/css/userdashboard.css';

export default function UserDashboard() {
  const user = useSelector(state => state.auth);
  const boards = useSelector(state => state.boards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards(user.id));
  })

  console.log(boards);

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
      </div>
      <div className='board_navigation'>
        <div className='fas fa-plus fa-2x fa-plus-user' />
      </div>
    </>
  )
}
