import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Unauthed from '../components/Unauthed';
import UnauthMosaic from '../components/UnauthMosaic';
import { clearPhotos } from '../store/photoReducer';

function UnauthedHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPhotos());
  }, [dispatch])

  return (
    <>
      <Unauthed />
      <UnauthMosaic />
    </>
  )
}


export default UnauthedHome;
