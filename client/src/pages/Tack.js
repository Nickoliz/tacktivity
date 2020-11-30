import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../store/photoReducer';
import '../css/tack.css';


export default function ViewPhoto() {
  const image = useSelector(state => state.photoReducer.photo);
  const dispatch = useDispatch();
  const photoId = useParams('id');

  useEffect(() => {
    dispatch(getPhoto(photoId.id))
  }, [dispatch, photoId])

  if (!image) return null;

  return (
    <>
      <div className='tack-background-color'>
        <div className='tack_container'>
          <div className='tack_image'>
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
          <div className='tack_container--right'>
            <div className='tack_top-nav'>
              <div className='fa fa-ellipsis-h fa-2x tack_download-img' />
              {/* Might have to remove this spacing div */}
              <div style={{ width: '200px' }} />
              <div className="tack-option-bar">Select</div>
              <div className='create-tack__board-modal' />
              <button type='text' className='create-tack__board modal-select'>Save</button>
            </div>
            <div className='tack_info tack_image-title'>Check One</div>
            <div className='tack_info'>Check Two</div>
            <div className='tack_info'>Check One, Two</div>
          </div>
        </div>
      </div>
    </>
  )


}
