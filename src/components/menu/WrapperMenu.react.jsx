import './WrapperMenu.scss';

import React from 'react';
import { Link } from 'react-router';
import listen from '../Listen';
import AppStore from '../../stores/AppStore';
import * as AppActionCreators from '../../actions/AppActionCreators';

let menuItemData = [
  { name: "Home", to: "/", separate: true, handler: null, icon: "#shape-home" },
  {
    name: "Notifications",
    to: "/notifications",
    separate: false,
    handler: null,
    icon: "#shape-earth"
  },
  {
    name: "Messages",
    to: "/messages",
    separate: false,
    handler: null,
    icon: "#shape-bubbles2"
  },
  {
    name: "Requests",
    to: "/requests",
    separate: false,
    handler: null,
    icon: "#shape-question"
  },
  {
    name: "Profile",
    to: "/daffy.duck",
    separate: false,
    handler: null,
    icon: "#shape-user"
  },
  {
    name: "Settings",
    to: "/settings",
    separate: false,
    handler: null,
    icon: "#shape-cog"
  },
  {
    name: "Log out",
    to: "/logout",
    separate: true,
    handler: null,
    icon: "#shape-exit"
  }
];

let footerItemData = [
  { name: "About", to: "/about", handler: null },
  { name: "Help", to: "/help", handler: null },
  { name: "Privacy", to: "/privacy", handler: null },
  { name: "Terms", to: "/terms", handler: null },
  { name: "Cookies", to: "/cookies", handler: null }
];

function getState() {
  return {
    active: AppStore.getMainMenuVisible()
  }
}

@listen([AppStore], getState)
class WrapperMenu extends React.Component {

  displayName = "WrapperMenu";

  constructor(props) {
    super(props);
  }

  render() {
    let className = "wrapper-menu";
    className += this.props.active ? " active" : "";

    let menuItems = menuItemData.map(item => {
      let icon = null;
      if (item.icon !== null || item.icon !== '') {
        icon = (
            <svg className="icon">
              <use xlinkHref={item.icon}/>
            </svg>
        );
      }
      return (
          <li key={item.name} className={item.separate ? "separate" : ""}>
            <Link to={item.to}
                  onClick={item.handler || this._handleHideMenu}
                  role="button">
              {icon}
              <span>{item.name}</span>
            </Link>
          </li>
      );
    });
    let footerItems = footerItemData.map(item => {
      return (
          <Link key={item.name}
                to={item.to}
                onClick={item.handler || this._handleHideMenu}
                role="button">
            <span>{item.name}</span>
          </Link>
      );
    });

    return (
        <nav className={className}>
          <ul>
            <li id="menu-return-trigger">
              <a onClick={this._handleHideMenu} role="button">
                <svg className="icon">
                  <use xlinkHref="#shape-arrow-right"/>
                </svg>
                <span>Back</span>
              </a>
            </li>
            <li className="separate">
              <form action="">
                <svg className="icon">
                  <use xlinkHref="#shape-search"/>
                </svg>
                <input placeholder="Search" type="search"/>
              </form>
            </li>

            {menuItems}
          </ul>
          <section className="page-footer">
            {footerItems}
            <a href="" onClick={this._handleReportBug}>Report a bug</a>
            <span className="copyright">
              &copy;2015 <a href="" target="_blank">NotMadeUp co.</a>
            </span>
          </section>
        </nav>
    );
  }

  _handleHideMenu(e) {
    AppActionCreators.hideMenu();
  }

  _handleReportBug(e) {
    e.preventDefault();
  }

}

export default WrapperMenu;