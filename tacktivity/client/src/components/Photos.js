import React from 'react';
import { useSelector } from 'react-redux';

function Photos() {
  const photos = useSelector(state => state.photoReducer.photos)



  // THIS ALL WORKS -- BELOW

  const listImages = [];

  for (let image in photos) {
    const img = photos[image];
    listImages.push(
      <>
        <img src={img.urls.small} key={img.id} alt={img.alt_description} />
        <div className='image-title'>
          {img.description}
        </div>
      </>
    );
  }

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
