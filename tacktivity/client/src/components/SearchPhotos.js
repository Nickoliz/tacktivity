import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ViewPhoto from './ViewPhoto';

export default function SearchPhotos() {
  const [tack, setTack] = useState('');
  const photos = useSelector(state => state.photoReducer.photos);


  let listImages = [];
  for (let image in photos) {
    listImages.push(photos[image]);
  }

  const handleClick = image => {
    setTack(<ViewPhoto image={image} />)
  }
  return (
    <>
      <div className='mosaic-container mc-unauthed'>
        {listImages.map((img, idx) =>
          <div key={idx} className='mosaic-box'>
            <>
              <img src={img.urls.small} alt={img.alt_description} onClick={e => handleClick(img)} />
              {/* <div className='image-title' key={img.links.self}>
                <div>{img.description}</div>
              </div> */}
            </>
          </div>
        )}
      </div>
      {tack}
    </>
  )
}
