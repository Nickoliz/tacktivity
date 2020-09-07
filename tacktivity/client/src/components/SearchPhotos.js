import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSinglePhoto } from '../store/tackReducer';

function SearchPhotos() {
  const photos = useSelector(state => state.photoReducer.photos)
  const [singleImageId, setSingleImageId] = useState('');
  const dispatch = useDispatch();

  let listImages = [];

  for (let image in photos) {
    const img = photos[image];

    // let imgDesc = img.description;
    // if (img.description === null) {
    //   imgDesc = img.description;
    // } else if (img.description.length > 80) {
    //   imgDesc = img.description.substring(0, 77) + "...";
    // }

    const handleClick = id => {
      dispatch(getSinglePhoto(singleImageId))
    }

    listImages.push(
      <>
        <div className='mosaic-box'>
          <img src={img.urls.small} key={img.id} alt={img.alt_description} onClick={e => handleClick(img.id)} />
          {/* <div className='image-title' key={img.links.self}>
            {imgDesc}
          </div> */}
        </div>
      </>
    );
  }

  return (
    <>
      <div className='mosaic-container'>
        {listImages}
      </div>
    </>
  )
}


export default SearchPhotos;
