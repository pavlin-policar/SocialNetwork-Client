import './WrapperModal.scss';

import React from 'react';

class WrapperModal extends React.Component {

  displayName = "WrapperModal";

  state = {
    active: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let modalButtons = (
      <div className="center-button-group">
        <button className="button">Encourage him</button>
        <button className="button boring">Stop him</button>
      </div>
    );

    let className = "wrapper-modal";
    className += this.state.active ? " active" : "";

    return (
      <div className={className}>
        <section className="modal">
          {this.props.children}
          {modalButtons}
        </section>
      </div>
    );
  }

}

export default WrapperModal;