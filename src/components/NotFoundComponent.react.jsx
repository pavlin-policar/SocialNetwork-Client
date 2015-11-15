import React from 'react';

class NotFoundComponent extends React.Component {

  displayName = "NotFoundComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>404 Not found</h1>
        </div>
    );
  }

}

export default NotFoundComponent;