import React, { useState } from 'react';
import Authed from './Authed';
import { useSelector } from 'react-redux';
import "../css/createTack.css";


function CreateTack() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState(null);
  const [fileDescription, setFileDescription] = useState(null);
  const [url, setUrl] = useState(null);

  const currentUserId = useSelector(state => state.auth.id);

  const setImage = image => {
    setFile(image)
    const imageObj = URL.createObjectURL(image)
    setImagePreview(<img src={imageObj} alt=' ' />)
  }


  return (
    <>
      <Authed />
      <div className="create-tack-container">
        <div className="create-tack-box">
          <div className="tack-option-bar">Select
            <i className="tack-option-caret fas fa-caret-down" />
          </div>
          <div className='create-tack__board-modal' />
          <button type='text' className='create-tack__board modal-select'>Save</button>
          <div className='create-tack__main'>
            <div className='upload-box'>
              {(imagePreview) ?
                <>
                  <div id='tack_image-preview'>
                    {imagePreview}
                  </div>
                  <div>
                    <label className="revise-image-button" for="revise-upload">Change Image</label>
                    <input id="revise-upload" type='file' onChange={e => setImage(e.target.files[0])} accept='image/jpeg,image/png' />
                  </div>
                </>
                :
                <>
                  <input id='media-upload' type='file' onChange={e => setImage(e.target.files[0])} accept='image/jpeg,image/png' className="tack-box image-upload" />
                  <div className='fas fa-arrow-circle-up fa-2x' />
                  <div className='upload-text'>
                    {(imagePreview) ?
                      null
                      :
                      <span style={{ backgroundColor: 'inherit' }}>Upload a photo</span>
                    }
                  </div>
                </>
              }
            </div>
            <div className="tack-box__form">
              <form type='text' className='create-tack-form'>
                <input type='text' className='tack-title__input' onChange={e => setTitle(e.target.value)} placeholder="Add your title"></input>
                <hr />
                <div />
                <div>
                </div>
                <input type='text' className='tack-description' onChange={e => setFileDescription(e.target.value)} placeholder="Tell everyone what your Tack is about" />
                <hr />
                <div />
                <input type='text' className='tack-url' onChange={e => setUrl(e.target.value)} placeholder="Add a destination link (optional)" />
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
