import React from 'react';

import Unauthed from '../components/Unauthed';
import { colorPhotos } from '../store/photoReducer';
import { useDispatch } from 'react-redux';
import UnauthMosaic from '../components/UnauthMosaic';

function UnauthedHome() {
  const dispatch = useDispatch();

  (function () {
    dispatch(colorPhotos());
  })();

  return (
    <>
      <Unauthed />
      <UnauthMosaic />
    </>
  )
}


export default UnauthedHome;
