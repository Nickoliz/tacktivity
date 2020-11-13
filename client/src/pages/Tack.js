import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../store/photoReducer';
import '../css/tack.css';


function ViewPhoto() {
  const dispatch = useDispatch();
  const photoId = useParams('id');
  const image = useSelector(state => state.photoReducer.photo);


  useEffect(() => {
    dispatch(getPhoto(photoId.id))
  }, [dispatch, photoId])

  if (!image) return null;

  return (
    <>
      <div className='tack_container'>
        <div className='tack_image'>
          <img src={image.urls.regular} alt={image.alt_description} />
        </div>
      </div>
    </>
  )


}


export default ViewPhoto;
