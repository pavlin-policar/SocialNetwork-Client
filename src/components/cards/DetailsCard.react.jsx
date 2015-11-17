import './DetailsCard.scss';

import React from 'react';
import { Link } from 'react-router';
import StackComponent from '../common/StackComponent.react';

class DetailsCard extends React.Component {

  displayName = "DetailsCard";

  constructor(props) {
    super(props);
  }

  render() {
    let detailsLink = `/${this.props.profileId}/details`;
    return (
        <StackComponent className="details-card container">
          <Link to={detailsLink} className="block-link ">
            <div className="bordered">
              <svg className="icon">
                <use xlinkHref="#shape-user"/>
              </svg>
              <h5>Details</h5>
            </div>
            <StackComponent>
              <span className="details-inline-birthday">Born on 12.3.1994</span>
              <span className="details-inline-education">Studied at FRI UL</span>
            </StackComponent>
          </Link>
        </StackComponent>
    );
  }

}

export default DetailsCard;