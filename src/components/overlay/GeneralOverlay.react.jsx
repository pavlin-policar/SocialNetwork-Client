import './GeneralOverlay.scss';

import React from 'react';
import AppStore from '../../stores/AppStore';
import * as AppActionCreators from '../../actions/AppActionCreators';

function getState() {
  return {
    active: AppStore.getOverlayVisible()
  }
}

class GeneralOverlay extends React.Component {

  displayName = "GeneralOverlay";

  state = getState();

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getState());
  }

  render() {
    let className = 'general-overlay';
    className += this.state.active ? ' active' : '';
    return (
      <div className={className} onClick={this._onClick}></div>
    );
  }

  _onClick() {
    AppActionCreators.hideMenu();
  }

}

export default GeneralOverlay;