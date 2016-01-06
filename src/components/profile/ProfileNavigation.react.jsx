import './ProfileNavigation.scss';

import React from 'react';
import { Link } from 'react-router';
import InlineComponent from '../common/InlineComponent.react';

class ProfileNavigation extends React.Component {

  displayName = "ProfileNavigation";

  constructor(props) {
    super(props);
  }

  render() {
    const wallLink = `/${this.props.profileId}`;
    const infoLink = `/${this.props.profileId}/details`;
    const friendsLink = `/${this.props.profileId}/friends`;
    const picturesLink = `/${this.props.profileId}/gallery`;
    return (
        <div className="profile-navigation-wrapper">
          <div className="max-width-container profile-navigation">
            <Link to={wallLink}>Wall</Link>
            <Link to={infoLink}>Information</Link>
            <Link to={friendsLink}>Friends</Link>
            <Link to={picturesLink}>Pictures</Link>
          </div>
        </div>
    );
  }

}

export default ProfileNavigation;