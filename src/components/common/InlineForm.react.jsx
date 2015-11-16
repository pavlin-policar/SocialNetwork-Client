import './InlineComponent.scss'

import React from 'react';

class InlineForm extends React.Component {

  displayName = "InlineForm";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'inline-component';
    if ('className' in this.props) {
      className += ' ' + this.props.className;
    }
    return (
        <form {...this.props} className={className}>
          {this.props.children}
        </form>
    );
  }

}

export default InlineForm;