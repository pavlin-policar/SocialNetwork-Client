import React from 'react';
import SidebarLeft from './SidebarLeft.react';
import SidebarRight from './SidebarRight.react';
import FeedComponent from './FeedComponent.react';

class WallComponent extends React.Component {

  displayName = "MainContent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <SidebarLeft />
        <SidebarRight />
        <FeedComponent />
      </main>
    );
  }

}

export default WallComponent;