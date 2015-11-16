import './Header.scss';

import React from 'react';
import { Link } from 'react-router';
import * as AppActionCreators from '../../actions/AppActionCreators';

class Header extends React.Component {

  displayName = "Header";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header className="banner" role="banner">

          <Link id="logo" to="/"><h1>SP Social</h1></Link>
          <button onClick={this._handleShowMenu}>Menu</button>
        </header>
    );
  }

  _handleShowMenu(e) {
    e.preventDefault();
    AppActionCreators.showMenu();
  }

}

export default Header;