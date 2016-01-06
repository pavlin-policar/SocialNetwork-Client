import './WallComponent.scss';

import React from 'react';
import SidebarLeft from './SidebarLeft.react';
import SidebarRight from './SidebarRight.react';
import FeedComponent from '../FeedComponent.react';
import StackComponent from '../common/StackComponent.react';
import PostMessage from '../messages/PostMessage.react';

function getState() {
  return {
    postMessage: {
      active: true,
      message: (
          <div>
            <h4>Terrorist attacks in Paris</h4>
            <p>Help support the people in Paris by donating a dollar to the aid effort.</p>
            <p><a href="">Find out more.</a></p>
          </div>
      )
    }
  };
}

class WallComponent extends React.Component {

  displayName = "MainContent";

  state = getState();

  constructor(props) {
    super(props);
  }

  render() {
    let postMessage = null;
    if (this.state.postMessage.active) {
      postMessage = <PostMessage message={this.state.postMessage.message}/>;
    }
    return (
      <div className="max-width-container wall-component">
        <SidebarLeft />
        <StackComponent className="col-40 home-middle-column">
          {postMessage}
          <FeedComponent />
        </StackComponent>
        <SidebarRight />
      </div>
    );
  }

}

export default WallComponent;