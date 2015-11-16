import './TrendingCard.scss';

import React from 'react';
import StackComponent from '../common/StackComponent.react';

class TrendingCard extends React.Component {

  displayName = "TrendingCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="container trending-card">
          <StackComponent>
            <h5>Trending today</h5>
            <a href="">#pray4paris</a>
            <a href="">#dolanplz</a>
            <a href="">#donaldtrumpforprez</a>
            <a href="">#stoptheimmigrants</a>
            <a href="">#juliet</a>
            <a href="">#fallout4</a>
          </StackComponent>
        </StackComponent>
    );
  }

}

export default TrendingCard;