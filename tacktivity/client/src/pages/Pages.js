import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login'
import Signup from '../components/Signup';
import UnauthedHome from '../pages/UnauthedHome'


export default function Pages() {
  return (
    <>
      <Route path='/' component={UnauthedHome}>

      </Route>
    </>
  )
}
