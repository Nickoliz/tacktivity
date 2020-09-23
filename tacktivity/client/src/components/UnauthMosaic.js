import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SearchPhotos() {
  const photos = useSelector(state => state.photoReducer.photos)
  let listImages = [];

  for (let image in photos) {
    const img = photos[image];

    listImages.push(
      <>
        <div key={img.id} className='mosaic-box mb-unauthed'>
          <img src={img.urls.small} key={img.id} alt={img.alt_description} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='mosaic-container mc-unauthed'>
        {listImages}
      </div>
    </>
  )
}


export default SearchPhotos;
