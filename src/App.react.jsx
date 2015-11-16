import './App.scss';

import React from 'react';
import WrapperComponent from './components/WrapperComponent.react';
import WrapperModal from './components/modal/WrapperModal.react';
import WrapperMenu from './components/menu/WrapperMenu.react';
import GeneralOverlay from './components/GeneralOverlay.react';

let modalMessage = (
    <div>
      <h1>Make a decision</h1>

      <div className="modal-body">
        <p>Your friend is about to do something stupid.</p>

        <p>He wants to prove that he isn't scared of the police, so he has
          decided to take a leak at some statue in the middle of the city. The
          police haven't caught on yet, but you see some patrol men strolling
          by.</p>

        <p>You can encourage him; this will surely make a great story to tell
          your friends and future children. Or you could be totally lame and
          stop him. An arrest probably wouldn't look good for his career.</p>

        <p>A tough choice is upon you, and you are the sole person sober enough
          to make a rational decision at the present moment.</p>

        <p>What do you do?</p>
      </div>
    </div>
);

class App extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <WrapperModal>{modalMessage}</WrapperModal>
          <WrapperMenu />
          <WrapperComponent>
            {this.props.children}
          </WrapperComponent>
          <GeneralOverlay />
        </div>
    );
  }
}

export default App;
