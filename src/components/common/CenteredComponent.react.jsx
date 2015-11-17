import './CenteredComponent.scss';

import React from 'react';

class CenteredComponent extends React.Component {

  displayName = "CenteredComponent";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'centered-component';
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

export default CenteredComponent;