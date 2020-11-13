import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhoto } from '../store/photoReducer';


function ViewPhoto() {
  const dispatch = useDispatch();
  const photoId = useParams('id');
  const image = useSelector(state => state.photoReducer.photo);

  console.log(photoId.id);

  useEffect(() => {
    dispatch(getPhoto(photoId.id))
  }, [dispatch, photoId])

  console.log(image);

  if (!image) return null;

  return (
    <>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </>
  )


}


export default ViewPhoto;
