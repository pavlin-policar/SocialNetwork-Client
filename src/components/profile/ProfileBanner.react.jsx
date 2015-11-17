import './ProfileBanner.scss';

import React from 'react';

class ProfileBanner extends React.Component {

  displayName = "ProfileBanner";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="profile-banner">
          <div className="max-width-container">
            <img alt="" src="http://placehold.it/196x196"/>
          </div>
        </div>
    );
  }

}

export default ProfileBanner;