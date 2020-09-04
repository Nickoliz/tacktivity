import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPhotos } from '../store/imageReducer';

function Images() {
  const [images, setImages] = useState('');
  const dispatch = useDispatch();

  (getPhotos = () => {
    setImages(dispatch(getPhotos()));
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
