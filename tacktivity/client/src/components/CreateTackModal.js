import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateTackModal = ({ hideModal }) => {

  return (
    <>
      <div onClick={hideModal} className='container-close' />
      <div className='create-tack__modal-container'>
        <div className='create-tack__box'>
          <NavLink to='/create-tack' style={{ textDecoration: "none" }}>
            <div className='create-tack--button'>
              Create a Tack
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default CreateTackModal;
