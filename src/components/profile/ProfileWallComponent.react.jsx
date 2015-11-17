import React from 'react';
import { Link } from 'react-router';
import DetailsCard from '../cards/DetailsCard.react';
import PictureGalleryCard from '../cards/PictureGalleryCard.react';
import FeedComponent from '../FeedComponent.react';

class ProfileWallComponent extends React.Component {

  displayName = "ProfileWallComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="col-25">
            <DetailsCard profileId={this.props.params.profileId}/>
            <PictureGalleryCard profileId={this.props.params.profileId}/>
          </div>
          <div className="col-50">
            <FeedComponent />
          </div>
          <div className="col-25">
            <div className="container">
            </div>
          </div>
        </div>
    );
  }

}

export default ProfileWallComponent;