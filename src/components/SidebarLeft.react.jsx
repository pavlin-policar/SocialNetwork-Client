import './SidebarLeft.scss';

import React from 'react';
import QuickProfile from './QuickProfile.react';
import Trending from './Trending.react';

class SidebarLeft extends React.Component {

  displayName = "SidebarLeft";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-sidebar-left">
        <QuickProfile />
        <Trending />
      </div>
    );
  }

}

export default SidebarLeft;