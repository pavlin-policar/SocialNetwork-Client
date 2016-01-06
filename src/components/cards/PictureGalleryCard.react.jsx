import React from 'react';
import { Link } from 'react-router';
import StackComponent from '../common/StackComponent.react';
import Grid from '../common/Grid.react';

class PictureGalleryCard extends React.Component {

  displayName = "PictureGalleryCard";

  constructor(props) {
    super(props);
  }

  render() {
    let galleryLink = `/${this.props.profileId}/gallery`;
    return (
        <StackComponent className="card container">
          <Link to={galleryLink} className="block-link">
            <div className="padded bordered">
              <svg className="icon">
                <use xlinkHref="#shape-images"/>
              </svg>
              <h5>Gallery</h5>
            </div>
            <Grid className="padded">
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
              <img className="col-25" alt="" src="http://placehold.it/128x128" height="100%" width="100%"/>
            </Grid>
          </Link>
        </StackComponent>
    );
  }

}

export default PictureGalleryCard;