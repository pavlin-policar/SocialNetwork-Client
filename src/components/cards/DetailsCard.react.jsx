import './DetailsCard.scss';

import React from 'react';
import StackComponent from '../common/StackComponent.react';

class DetailsCard extends React.Component {

  displayName = "DetailsCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="container details-card">
          <StackComponent>
            <span className="details-inline-birthday">Born on 12.3.1994</span>
            <span className="details-inline-education">Studied at FRI UL</span>
          </StackComponent>
        </StackComponent>
    );
  }

}

export default DetailsCard;