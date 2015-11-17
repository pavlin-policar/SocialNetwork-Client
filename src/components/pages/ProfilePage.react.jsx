import React from 'react';
import StackComponent from '../common/StackComponent.react';
import InlineComponent from '../common/InlineComponent.react';
import ProfileBanner from '../profile/ProfileBanner.react';
import ProfileNavigation from '../profile/ProfileNavigation.react';

class ProfilePage extends React.Component {

  displayName = "ProfilePage";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="margin-bottom">
          <ProfileBanner />
          <ProfileNavigation profileId={this.props.routeParams.profileId} />
          {this.props.children}
        </StackComponent>
    );
  }

}

export default ProfilePage;