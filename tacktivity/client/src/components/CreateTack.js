import React from 'react';
import Authed from './Authed';
import { useSelector } from 'react-redux';


function CreateTack() {

  const currentUserId = useSelector(state => state.auth.id);

  const getBoards = (currentUserId) => {
    // fetch user boards
    // loop through create an option list\
    // probably a separate component
  }

  return (
    <>
      <Authed />
      <div className="create-tack-container">
        <div className="create-tack-box">
          <div className="tack-option-bar">Select</div>
          <div className='create-tack__board-modal' />
          <button type='text' className='create-tack__board modal-select'>Save</button>
          <div className='create-tack__main'>
            <div className='upload-box'>
              <input id='media-upload' type='file' title=' ' accept='image/bmp,gif,image/png,image/tiff,image/webp' className="tack-box image-upload" />
              <div className='fas fa-arrow-circle-up fa-2x' />
              <div className='upload-text'>Upload a photo</div>
            </div>
            <div className="tack-box__form">
              <form type='text' className='create-tack-form'>
                <input type='text' className='tack-title__input' placeholder="Add your title"></input>
                <hr />
                <div />
                <div>
                </div>
                <input type='text' className='tack-description' placeholder="Tell everyone what your Tack is about" />
                <hr />
                <div />
                <input type='text' className='tack-url' placeholder="Add a destination link" />
                <hr />
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}

export default CreateTack
