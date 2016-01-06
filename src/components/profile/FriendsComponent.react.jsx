import React from 'react';
import Grid from '../common/Grid.react';
import FriendElement from '../FriendElement.react';

class FriendsComponent extends React.Component {

  displayName = "FriendsComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="centered col-75 ">
            <div className="padded container">
              <h1 className="bordered">Daffy's friends</h1>
              <Grid className="grid-3">
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
                <FriendElement />
              </Grid>
            </div>
          </div>
        </div>
    );
  }

}

export default FriendsComponent;