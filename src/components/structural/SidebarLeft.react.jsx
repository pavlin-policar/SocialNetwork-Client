import './SidebarLeft.scss';

import React from 'react';
import ProfileCard from '../cards/ProfileCard.react';
import TrendingCard from '../cards/TrendingCard.react';

class SidebarLeft extends React.Component {

  displayName = "SidebarLeft";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-sidebar-left">
        <ProfileCard />
        <TrendingCard />
      </div>
    );
  }

}

export default SidebarLeft;