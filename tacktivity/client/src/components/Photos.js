import React from 'react';
import { useSelector } from 'react-redux';

import { getPhotos } from '../store/photoReducer';

function Photos() {
  const photos = useSelector(state => state.photoReducer.photos)



  // THIS ALL WORKS -- BELOW

  const listImages = [];

  for (let image in photos) {
    const img = photos[image];
    listImages.push(<img src={img.urls.small} key={img.id} alt={img.alt_description} />);
  }

  console.log(listImages);

  // for (let img in photos) {
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
