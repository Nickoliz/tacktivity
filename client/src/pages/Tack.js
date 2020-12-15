import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhoto, collectionPhotos } from '../store/photoReducer';
import SearchPhotos from '../components/SearchPhotos';
import '../css/tack.css';


export default function ViewPhoto() {
  const image = useSelector(state => state.photoReducer.photo);
  const dispatch = useDispatch();
  const photoId = useParams('id');


  useEffect(() => {
    dispatch(getPhoto(photoId.id));
    dispatch(collectionPhotos())
  }, [dispatch, photoId])


  if (!image) return null;


  return (
    <>
      <div className='tack-background-color'>
        <div className='tack_container'>
          <div className='tack_image'>
            <img className='tack_image' src={image.urls.regular} alt={image.alt_description} />
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
            <div className='tack_info tack_image-title'>{image.alt_description}</div>
            <div className='tack_info tack_image-user-info'>
              <img className='tack_info tack_image-user-image' alt={image.alt_description} src={image.user.profile_image.medium} />
              <div className='tack_info tack_image-user-name'>
                {image.user.first_name} {image.user.last_name}
                {/* {image.links.html} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='more-like-container'>
        More like this
        <div className='more-like_mosaic'>
          <SearchPhotos divName={"tack-mosaic"} />
        </div>
      </div>
    </>
  )


}
