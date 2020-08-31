import React from 'react';
import { Route } from 'react-router-dom';
import UnauthedHome from '../pages/UnauthedHome'
import AuthedHome from '../pages/AuthedHome';


export default function Pages() {
  return (
    <>
      <Route path='/' component={UnauthedHome}></Route>
      <Route path='/#' component={AuthedHome}></Route>
    </>
  )
}
