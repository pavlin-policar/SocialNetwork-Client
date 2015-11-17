import './EventCard.scss';

import React from 'react';
import StackComponent from '../common/StackComponent.react';

class EventCard extends React.Component {

  displayName = "EventCard";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StackComponent className="container event-card">
          <StackComponent className="event-card-today">
            <h5>Events today</h5>
            <StackComponent>
              <span className="event-inline-global"><a href="">Paris terrorist attacks</a></span>
              <span className="event-inline-birthday"><a href="">Bugs Bunny</a> is celebrating their birthday today.</span>
            </StackComponent>
          </StackComponent>
          <StackComponent className="event-card-upcoming">
            <h5>Upcoming events</h5>
            <StackComponent>
              <span className="event-inline-social"><a href="">Metallica concert</a> tommorow at 21:00</span>
            </StackComponent>
          </StackComponent>
        </StackComponent>
    );
  }

}

export default EventCard;