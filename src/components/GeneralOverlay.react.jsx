import React from 'react';
import * as AppActionCreators from '../actions/AppActionCreators';

class GeneralOverlay extends React.Component {

  displayName = "GeneralOverlay";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general-overlay" onClick={this._onClick}></div>
    );
  }

  _onClick() {
    AppActionCreators.hideMenu();
  }

}

export default GeneralOverlay;