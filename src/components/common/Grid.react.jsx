import './Grid.scss';

import React from 'react';

class Grid extends React.Component {

  displayName = "Grid";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="grid">
          {this.props.children}
        </div>
    );
  }

}

export default Grid;