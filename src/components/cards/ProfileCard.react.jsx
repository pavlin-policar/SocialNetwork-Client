import './ProfileCard.scss';

import React from 'react';
import { Link } from 'react-router';
import StackComponent from '../common/StackComponent.react';
import InlineComponent from '../common/InlineComponent.react';

class ProfileCard extends React.Component {

  displayName = "ProfileCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="container profile-card" id="quick-profile">
          <div className="profile-card-banner"></div>
          <InlineComponent className="profile-card-content">
            <img alt="" src="http://placehold.it/96x96"/>
            <StackComponent>
              <h3><Link to="/daffy.duck">Daffy Duck</Link></h3>
              <h4>Narnia</h4>
            </StackComponent>
          </InlineComponent>
          <StackComponent className="profile-card-statistics">
            <h5>User statistics</h5>
            <span className="profile-card-statistics-last-seen">Last seen: 2 hours ago</span>
            <span className="profile-card-statistics-total-time-online">Total time spent online: 32 minutes</span>
          </StackComponent>
        </StackComponent>
    );
  }

}

export default ProfileCard;