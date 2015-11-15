import React from 'react';

class QuickInformation extends React.Component {

  displayName = "QuickInformation";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container" id="information">
        <h5>Here are some things happening today</h5>
        <span><a href="">Tweety Bird</a> and <a href="">Jessica Alba</a> are celebrating their birthdays today.</span>
      </section>
    );
  }

}

export default QuickInformation;