import './Header.scss';

import React from 'react';
import { Link } from 'react-router';
import Listen from '../Listen';
import AppStore from '../../stores/AppStore';
import * as AppActionCreators from '../../actions/AppActionCreators';


function getState() {
  return {
    menuOpen: AppStore.getMainMenuVisible()
  }
}

@Listen([AppStore], getState)
class Header extends React.Component {

  displayName = "Header";

  constructor(props) {
    super(props);
  }

  render() {
    let menuClass = 'icon';
    if (this.props.menuOpen) {
      menuClass += ' shape-rotate-45';
    }
    return (
        <header className="bordered banner" role="banner">
          <button onClick={this._handleShowMenu} className="icon-container">
            <svg className={menuClass}>
              <use xlinkHref="#shape-plus"/>
            </svg>
            Menu
          </button>
          <Link to="/" className="icon-container">
            <svg className="icon">
              <use xlinkHref="#shape-home"/>
            </svg>
            Home
          </Link>
          <button className="icon-container">
            <svg className="icon">
              <use xlinkHref="#shape-bubbles2"/>
            </svg>
            Messages
          </button>
          <button className="icon-container">
            <svg className="icon">
              <use xlinkHref="#shape-earth"/>
            </svg>
            Notifications
          </button>
        </header>
    );
  }

  _handleShowMenu(e) {
    e.preventDefault();
    AppActionCreators.showMenu();
  }

}

export default Header;