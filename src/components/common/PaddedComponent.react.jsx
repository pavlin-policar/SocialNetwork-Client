import './PaddedComponent.scss';

import React from 'react';

class PaddedComponent extends React.Component {

  displayName = "PaddedComponent";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'padded-component';
    if ('className' in this.props) {
      className += ' ' + this.props.className;
    }
    return (
        <div {...this.props} className={className}>
          {this.props.children}
        </div>
    );
  }

}

export default PaddedComponent;