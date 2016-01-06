import './SidebarRight.scss';

import React from 'react';
import EventCard from '../cards/EventCard.react';

class SidebarRight extends React.Component {

  displayName = "SidebarRight";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-30 home-sidebar-right">
          <EventCard />
        </div>
    );
  }

}

export default SidebarRight;