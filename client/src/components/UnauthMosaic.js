import React from 'react';
import { useSelector } from 'react-redux';

export default function UnauthedMosaic() {
  const photos = useSelector(state => state.photoReducer.photos)

  let listImages = [];
  for (let image in photos) {
    listImages.push(photos[image]);
  }

  if (!photos) return null;

  return (
    <>
      <div className='mosaic-container mb-unauthed'>
        {listImages.map((img, idx) =>
          <div key={idx} className='mb-unauthed'>
            <img src={img.urls.small} alt={img.alt_description} />
          </div>
        )}
      </div>
    </>
  )
}
