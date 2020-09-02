import React from 'react';
import '../css/logout.css';
import { useDispatch } from 'react-redux';


function Logout() {
  const dispatch = useDispatch();


  // const logoutUser = () => {
  //   dispatch(logout());
  // }

  return (
    <>
      <div className='logout-container'>
        <div className='logout-container_box'>
          <div>
            <button className='logout-button' /*onClick={e => logoutUser()}*/>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Logout;
