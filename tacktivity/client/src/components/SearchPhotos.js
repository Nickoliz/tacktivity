import React from 'react';
import { useSelector } from 'react-redux';

function SearchPhotos() {
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



    //   if (objLen === 0) {
    //     listImages = (
    //       <>
    //         <img src='https://img.cinemablend.com/cb/f/c/5/8/2/6/fc5826a19acdbfd29728b2f398e854ef821312f66a696bd6d9db37d491a23891.jpg' key='1' alt='photo_genesis' />
    //       </>
    //     );
    //   }
    //   else {
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


export default SearchPhotos;
