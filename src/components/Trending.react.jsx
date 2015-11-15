import React from 'react';

class Trending extends React.Component {

  displayName = "Trending";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container" id="trending">
        <h4>Trending today</h4>
        <ul>
          <li><a href="">#dolanplz</a></li>
          <li><a href="">#donaldtrumpforprez</a></li>
          <li><a href="">#stoptheimmigrants</a></li>
          <li><a href="">#juliet</a></li>
          <li><a href="">#fallout4</a></li>
        </ul>
      </section>
    );
  }

}

export default Trending;