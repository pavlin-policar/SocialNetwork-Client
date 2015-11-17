import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App.react';
import WallComponent from './components/structural/WallComponent.react';
import ProfilePage from './components/pages/ProfilePage.react';
import FeedComponent from './components/FeedComponent.react';
import NotFoundComponent from './components/NotFoundComponent.react';

export default (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>

        <IndexRoute component={WallComponent}/>

        <Route path="/:profileId" component={ProfilePage}>
          <IndexRoute component={FeedComponent}/>
        </Route>

        <Route path="*" component={NotFoundComponent}/>

      </Route>
    </Router>
);