import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ViewPhoto from './ViewPhoto';

function SearchPhotos() {
  const [tack, setTack] = useState('');
  const [imgId, setImgId] = useState(null);
  const photos = useSelector(state => state.photoReducer.photos)


  const handleClick = id => {
    setTack(<ViewPhoto id={id} />)
  }

  let listImages = [];

  useEffect(() => {
    for (let image in photos) {
      const img = photos[image];
      setImgId(img.id);
    }
  }, [photos]);

  for (let image in photos) {
    const img = photos[image];

    listImages.push(
      <>
        <div key={imgId} className='mosaic-box'>
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
      <div key={imgId} className='mosaic-container mc-unauthed'>
        {listImages}
      </div>
      {tack}
    </>
  )
}


export default SearchPhotos;

// To use for desdcriptions if I want
    // let imgDesc = img.description;
    // if (img.description === null) {
    //   imgDesc = img.description;
    // } else if (img.description.length > 80) {
    //   imgDesc = img.description.substring(0, 77) + "...";
    // }
