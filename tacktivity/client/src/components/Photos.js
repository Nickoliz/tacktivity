import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotos } from '../store/photoReducer';

function Photos() {
  const photos = useSelector(state => state.photoReducer)
  // const dispatch = useDispatch();


  // THIS ALL WORKS -- BELOW

  const listImages = [];

  // for (let img of photos) {
  //   listImages.push(<img src={img.urls.small} key={img.id} alt={img.alt_description} />)
  // }

  return (
    <>
      <div className='image-container'>
        <div className='image-box'>
          {listImages}
        </div>
      </div>
    </>
  )

}


export default Photos;
