import React from 'react';
import { useSelector } from 'react-redux';

function DashPhotos() {

  const photos = useSelector(state => state.photoReducer.photos)

  let listImages = [];

  for (let image in photos) {
    const img = photos[image];

    // let imgDesc = img.description;
    // if (img.description === null) {
    //   imgDesc = img.description;
    // } else if (img.description.length > 80) {
    //   imgDesc = img.description.substring(0, 77) + "...";
    // }

    listImages.push(
      <>
        <div className='mosaic-box'>
          <img src={img.urls.small} key={img.id} alt={img.alt_description} />
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


export default DashPhotos;
