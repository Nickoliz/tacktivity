import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function SearchPhotos() {
  const photos = useSelector(state => state.photoReducer.photos);


  let listImages = [];
  for (let image in photos) {
    listImages.push(photos[image]);
  }

  return (
    <>
      <div className='mosaic-container mc-unauthed'>
        {listImages.map((img, idx) =>
          <Link key={idx} to={`/tack/${img.id}`}>
            <div className='mosaic-box'>
              <>
                <img src={img.urls.small} alt={img.alt_description} />
                {/* <div className='image-title' key={img.links.self}>
                <div>{img.description}</div>
              </div> */}
              </>
            </div>
          </Link>
        )}
      </div>
    </>
  )
}
