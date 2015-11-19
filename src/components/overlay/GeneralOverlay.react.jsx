import './GeneralOverlay.scss';

import React from 'react';
import AppStore from '../../stores/AppStore';
import * as AppActionCreators from '../../actions/AppActionCreators';
import Listen from '../Listen'

function getState() {
  return {
    active: AppStore.getOverlayVisible()
  }
}

@Listen([AppStore], getState)
class GeneralOverlay extends React.Component {

  displayName = "GeneralOverlay";

  constructor(props) {
    super(props);

  }

  render() {
    let className = 'general-overlay';
    className += this.props.active ? ' active' : '';
    return (
      <div className={className} onClick={this._onClick}></div>
    );
  }

  _onClick() {
    AppActionCreators.hideMenu();
  }

}

export default GeneralOverlay;