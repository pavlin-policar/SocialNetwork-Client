import './StackComponent.scss';

import React from 'react';

class StackComponent extends React.Component {

  displayName = "StackComponent";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'stack-component';
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

export default StackComponent;