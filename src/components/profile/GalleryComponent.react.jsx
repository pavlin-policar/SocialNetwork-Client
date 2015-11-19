import './GalleryComponent.scss';

import React from 'react';
import Grid from '../common/Grid.react';

class GalleryComponent extends React.Component {

  displayName = "GalleryComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="col-75 centered">
            <section className="padded container">
              <h1>Picture gallery</h1>
              <Grid className="gallery-grid grid-6">
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
                <a href=""><img alt="" src="http://placehold.it/256x256" height="100%" width="100%"/></a>
              </Grid>
            </section>
          </div>
        </div>
    );
  }

}

export default GalleryComponent;