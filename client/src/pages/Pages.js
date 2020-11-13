import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UnauthedHome from '../pages/UnauthedHome'
import AuthedHome from '../pages/AuthedHome';
import CreateTack from '../components/CreateTack';
import Tack from './Tack';
import Authed from '../components/Authed';
import SearchHome from './SearchHome';
// import SearchPhotos from '../components/SearchPhotos';

export default function Pages() {
  return (
    <>
      <Authed />
      <Switch>
        <Route exact path='/' component={UnauthedHome} />
        <Route exact path='/home' component={AuthedHome} />
        <Route path='/home/:term' component={SearchHome} />
        <Route path='/create-tack' component={CreateTack} />
        <Route path='/tack/:id' component={Tack} />
      </Switch>
    </>
  )
}
