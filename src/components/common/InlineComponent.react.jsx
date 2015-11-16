import './InlineComponent.scss'

import React from 'react';

class InlineComponent extends React.Component {

  displayName = "InlineComponent";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'inline-component';
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

export default InlineComponent;