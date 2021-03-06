import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App.react';
import WallComponent from './components/structural/WallComponent.react';

import ProfilePage from './components/pages/ProfilePage.react';
import ProfileWallComponent from './components/profile/ProfileWallComponent.react';
import DetailsComponent from './components/profile/DetailsComponent.react';
import FriendsComponent from './components/profile/FriendsComponent.react';
import GalleryComponent from './components/profile/GalleryComponent.react';

import NotFoundComponent from './components/NotFoundComponent.react';

export default (
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>

        <IndexRoute component={WallComponent}/>

        <Route path="/:profileId" component={ProfilePage}>
          <IndexRoute component={ProfileWallComponent}/>
          <Route path="details" component={DetailsComponent}/>
          <Route path="friends" component={FriendsComponent}/>
          <Route path="gallery" component={GalleryComponent}/>
        </Route>

        <Route path="*" component={NotFoundComponent}/>

      </Route>
    </Router>
);
