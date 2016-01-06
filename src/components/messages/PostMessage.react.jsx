import './PostMessage.scss';

import React from 'react';

class PostMessage extends React.Component {

  displayName = 'PostMessage';

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="padded container post-message">
          {this.props.message}
        </div>
    );
  }

}

export default PostMessage;