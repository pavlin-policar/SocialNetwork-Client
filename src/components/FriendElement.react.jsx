import './FriendElement.scss';

import React from 'react';
import InlineComponent from './common/InlineComponent.react';

class FriendElement extends React.Component {

  displayName = "FriendElement";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <InlineComponent className="padded friend-element">
          <img alt="" src="http://placehold.it/64x64" height="64px" width="64px"/>
          <div>
            <h4>Goofy</h4>
            <span className="friend-element-mutual">3 mutual friends</span>
          </div>
        </InlineComponent>
    );
  }

}

export default FriendElement;