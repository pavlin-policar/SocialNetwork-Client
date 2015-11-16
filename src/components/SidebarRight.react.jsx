import './SidebarRight.scss';

import React from 'react';
import QuickInformation from './QuickInformation.react';

class SidebarRight extends React.Component {

  displayName = "SidebarRight";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-sidebar-right">
        <QuickInformation />
      </div>
    );
  }

}

export default SidebarRight;