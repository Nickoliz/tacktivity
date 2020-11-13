import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Tack from '../pages/Tack';

export default function SearchPhotos() {
  const [tack, setTack] = useState('');
  const photos = useSelector(state => state.photoReducer.photos);


  let listImages = [];
  for (let image in photos) {
    listImages.push(photos[image]);
  }

  const handleClick = image => {
    setTack(<Tack image={image} />)
  }

  return (
    <>
      <div className='mosaic-container mc-unauthed'>
        {listImages.map((img, idx) =>
          <Link key={idx} to={`/tack/${img.id}`}>
            <div className='mosaic-box'>
              <>
                <img src={img.urls.small} alt={img.alt_description} onClick={e => handleClick(img)} />
                {/* <div className='image-title' key={img.links.self}>
                <div>{img.description}</div>
              </div> */}
              </>
            </div>
          </Link>
        )}
      </div>
      {tack}
    </>
  )
}
