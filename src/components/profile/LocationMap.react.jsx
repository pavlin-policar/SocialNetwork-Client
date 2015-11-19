import './LocationMap.scss';

import React from 'react';
import keymirror from 'keymirror';
import { GoogleMap } from 'react-google-maps';

const LOCATION_STATUS = keymirror({
  LOADING: null,
  DONE: null,
  ERROR: null
});

class LocationMap extends React.Component {

  displayName = "LocationMap";

  state = {
    status: LOCATION_STATUS.LOADING,
    location: null,
    error: null
  };

  constructor(props) {
    super(props);

    this._getLocation = this._getLocation.bind(this);
    this._setLocation = this._setLocation.bind(this);
    this._handleLocationError = this._handleLocationError.bind(this);
  }

  render() {
    let map = null;
    if (this.state.status == LOCATION_STATUS.DONE) {
      const { latitude, longitude } = this.state.location.coords;

      map = (
          <GoogleMap
              containerProps={{style: {
                  height: "100%",
                  width: "100%"
               }}}
              defaultZoom={13}
              defaultCenter={{ lat: latitude, lng: longitude }}/>
      );
    }

    let loadingClass = 'location-map-loading';
    let locationClass = 'location-map';
    if (this.state.status === LOCATION_STATUS.LOADING) {
      loadingClass += ' active';
    } else if (this.state.status === LOCATION_STATUS.ERROR) {
      locationClass += ' error';
    }
    return (
        <div className={locationClass}>
          <div className={loadingClass}>
            <svg className="icon">
              <use xlinkHref="#shape-spinner8"/>
            </svg>
            Loading
          </div>
          <span className="location-map-error">
            {this.state.status === LOCATION_STATUS.ERROR ? this.state.error :
                ''}
          </span>
          {map}
        </div>
    );
  }

  componentDidMount() {
    this._getLocation();
  }

  _getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._setLocation,
          this._handleLocationError);
    } else {
      this.setState({
        status: LOCATION_STATUS.ERROR,
        error: 'Geolocation is not supported by your browser.'
      });
    }
  }

  _setLocation(position) {
    this.setState({
      status: LOCATION_STATUS.DONE,
      location: position
    });
  }

  _handleLocationError(err) {
    let errorMessage;
    switch (err.code) {
      case err.PERMISSION_DENIED:
        errorMessage = "You need to allow this web domain access to your" +
            "location in order to use the features supported by location" +
            "services.";
        break;
      case err.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case err.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      case err.UNKNOWN_ERROR:
        errorMessage = "An unknown error occurred.";
        break;
    }
    this.setState({
      status: LOCATION_STATUS.ERROR,
      error: errorMessage
    });
  }

}

export default LocationMap;