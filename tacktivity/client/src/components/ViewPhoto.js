import React from 'react';
import { useSelector } from 'react-redux';

function ViewPhoto() {

  const photo = useSelector(state => state.photoReducer.photo);

  console.log(photo);

  return (
    <>
      <div>
        <img />
      </div>
    </>
  )


}


export default ViewPhoto;