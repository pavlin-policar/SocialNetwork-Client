import React from 'react';
import StackComponent from '../common/StackComponent.react';
import InlineComponent from '../common/InlineComponent.react';
import ProfileBanner from '../profile/ProfileBanner.react';
import ProfileNavigation from '../profile/ProfileNavigation.react';
import DetailsCard from '../cards/DetailsCard.react';
import PictureGalleryCard from '../cards/PictureGalleryCard.react';

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

          <div className="max-width-container">
            <div className="col-25">
              <DetailsCard />
              <PictureGalleryCard />
            </div>
            <div className="col-50">
              {this.props.children}
            </div>
            <div className="col-25">
              <div className="container">
                something
              </div>
            </div>
          </div>
        </StackComponent>
    );
  }

}

export default ProfilePage;