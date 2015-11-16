import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App.react';
import WallComponent from './components/structural/WallComponent.react';
import NotFoundComponent from './components/NotFoundComponent.react';

export default (
    <Router history={createBrowserHistory()}>
      <Route name="root" path="/" component={App}>

        <IndexRoute component={WallComponent}/>

        <Route path="*" component={NotFoundComponent}/>

      </Route>
    </Router>
);