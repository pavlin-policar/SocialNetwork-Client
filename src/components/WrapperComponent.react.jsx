import React from 'react';
import Header from './Header.react';

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