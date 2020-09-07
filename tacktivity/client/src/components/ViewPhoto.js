import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTack } from '../store/tackReducer';

function ViewPhoto({ id }) {
  const dispatch = useDispatch();
  dispatch(getTack(id));
  const photo = useSelector(state => state.tackReducer.photo);

  return (
    <>
      <div>
        {/* <img src={photo.urls.regular} key={id} alt={photo.alt_description}/> */}
      </div>
    </>
  )


}


export default ViewPhoto;
