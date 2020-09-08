import React from 'react';

import Unauthed from '../components/Unauthed';
import { colorPhotos } from '../store/photoReducer';
import { useDispatch } from 'react-redux';
import SearchPhotos from '../components/SearchPhotos';

function UnauthedHome() {
  const dispatch = useDispatch();

  (function () {
    dispatch(colorPhotos());
  })();

  return (
    <>
      <Unauthed />
      <SearchPhotos />
    </>
  )
}


export default UnauthedHome;
