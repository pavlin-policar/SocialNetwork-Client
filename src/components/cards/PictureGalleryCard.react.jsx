import './PictureGalleryCard.scss';

import React from 'react';
import StackComponent from '../common/StackComponent.react';
import Grid from '../common/Grid.react';

class PictureGalleryCard extends React.Component {

  displayName = "PictureGalleryCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="container picture-gallery-card">
          <h5>Gallery</h5>
          <Grid>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
            <a className="col-25" href=""><img alt="" src="http://placehold.it/128x128" height="100%" width="100%"/></a>
          </Grid>
        </StackComponent>
    );
  }

}

export default PictureGalleryCard;