import './DetailsComponent.scss';

import React from 'react';
import CenteredComponent from '../common/CenteredComponent.react';
import PaddedComponent from '../common/PaddedComponent.react';
import StackComponent from '../common/StackComponent.react';
import LocationMap from './LocationMap.react';

class DetailsComponent extends React.Component {

  displayName = "DetailsComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="centered col-75">
            <div className="padded container">
              <h1>Details</h1>

              <StackComponent>
                <h5>Personal information</h5>
                <span>Email: daffy@magicmail.narnia</span>
                <span>Birthday: 31.2.1998</span>
              </StackComponent>

              <StackComponent>
                <h5>Location</h5>
                <p>This website can use your location information for an
                  improved
                  user experience.</p>
                <p>This can also be used to detect any unwanted access to your
                  account, such as pesky friends or other intrusions.</p>
                <LocationMap />
              </StackComponent>
            </div>
          </div>
        </div>
    );
  }

}

export default DetailsComponent;