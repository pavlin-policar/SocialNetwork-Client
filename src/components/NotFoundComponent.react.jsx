import './NotFoundComponent.scss';

import React from 'react';
import { Link } from 'react-router';

class NotFoundComponent extends React.Component {

  displayName = "NotFoundComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="centered col-75">
            <div className="container not-found">
              <h3>404 Not found</h3>

              <p><b>The page you have tried to access doesn't exist.</b></p>

              <p>If you got here by following a link on our website, please report
                the bug to the administrator. If you got here by clicking a link
                on
                an external domain, the link may be outdated or invalid.</p>

              <Link to="/">Go home</Link>
            </div>
          </div>
        </div>
    );
  }
}

export default NotFoundComponent;