import './HeaderMenu.scss';

import React from 'react';

class HeaderMenu extends React.Component {

  displayName = "HeaderMenu";

  constructor(props) {
    super(props);
  }

  render() {
    let className = (' ' + this.props.className) || '';
    return (
        <div className={'header-menu' + className}>
          {this.props.children}
        </div>
    );
  }

}

export default HeaderMenu;