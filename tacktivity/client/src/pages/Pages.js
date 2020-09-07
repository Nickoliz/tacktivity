import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthedHome from '../pages/UnauthedHome'
import AuthedHome from '../pages/AuthedHome';


export default function Pages() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={UnauthedHome}></Route>
        <Route path='/home' component={AuthedHome}></Route>
        {/* <Route path='/search' component={PhotoSearch}></Route> */}
      </Switch>
    </>
  )
}
