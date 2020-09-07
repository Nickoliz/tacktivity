import React from 'react';

import Authed from '../components/Authed';
import SearchPhotos from '../components/SearchPhotos';

function AuthedHome() {
  return (
    <>
      <Authed />
      <SearchPhotos />
    </>
  )
}


export default AuthedHome;
