import './WrapperComponent.scss';

import React from 'react';
import Header from '../header/Header.react';

class WrapperComponent extends React.Component {

  displayName = "WrapperComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-content">
        <Header />
        {this.props.children}
      </div>
    );
  }

}

export default WrapperComponent;