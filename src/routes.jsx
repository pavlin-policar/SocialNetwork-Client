import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App.react';
import WallComponent from './components/WallComponent.react';
import ProfileComponent from './components/ProfileComponent.react';
import NotFoundComponent from './components/NotFoundComponent.react';

export default (
    <Router history={createBrowserHistory()}>
      <Route name="root" path="/" component={App}>

        <IndexRoute component={WallComponent}/>

        <Route path=":userSlug" component={ProfileComponent}/>
        <Route path="*" component={NotFoundComponent}/>

      </Route>
    </Router>
);