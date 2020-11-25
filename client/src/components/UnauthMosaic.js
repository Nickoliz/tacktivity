import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPhotos, colorPhotos } from '../store/photoReducer';


export default function UnauthedMosaic() {
  const photos = useSelector(state => state.photoReducer.photos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(colorPhotos());
  }, [dispatch])

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
