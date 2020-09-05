import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotos } from '../store/photoReducer';

function Images() {
  const photos = useSelector(state => state.photoReducer)
  const [images, setImages] = useState(photos);
  const dispatch = useDispatch();

  (function showPhotos() {
    const photos = dispatch(getPhotos());
    setImages(photos);
  })();

  return (
    <>
      <div className='image-container'>
        <div className='image-box'>
          {images}
        </div>
      </div>
    </>
  )

}


export default Images;
