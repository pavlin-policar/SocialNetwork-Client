import React from 'react';

class QuickProfile extends React.Component {

  displayName = "QuickProfile";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container" id="quick-profile">
        <img alt="" src="http://placehold.it/56x56" />
      </section>
    );
  }

}

export default QuickProfile;