import React from 'react';
import StackComponent from '../common/StackComponent.react';

class EventCard extends React.Component {

  displayName = "EventCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="card container">
          <StackComponent className="padded bordered">
            <div>
              <svg className="icon">
                <use xlinkHref="#shape-sun"/>
              </svg>
              <h5>Events today</h5>
            </div>
            <StackComponent>
              <span className="icon-inline-heading"><a href="">Paris terrorist
                attacks</a></span>
              <span className="icon-inline-heading"><a href="">Bugs Bunny</a> is celebrating their birthday today.</span>
            </StackComponent>
          </StackComponent>
          <StackComponent className="padded">
            <div>
              <svg className="icon">
                <use xlinkHref="#shape-calendar"/>
              </svg>
              <h5>Upcoming events</h5>
            </div>
            <StackComponent>
              <span className="icon-inline-heading"><a href="">Metallica
                concert</a> tommorow at 21:00</span>
            </StackComponent>
          </StackComponent>
        </StackComponent>
    );
  }

}

export default EventCard;