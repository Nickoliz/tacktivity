import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPhotos } from '../store/photoReducer';

function Images() {
  const [images, setImages] = useState('');
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
