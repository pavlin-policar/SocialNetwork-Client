import './Grid.scss';

import React from 'react';

class Grid extends React.Component {

  displayName = "Grid";

  constructor(props) {
    super(props);
  }

  render() {
    let className = 'grid';
    if ('className' in this.props) {
      className += ' ' + this.props.className;
    }
    return (
        <div {...this.props} className={className}>
          {this.props.children}
        </div>
    );
  }

}

export default Grid;