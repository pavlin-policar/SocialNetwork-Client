import React from 'react';
import TabbedComponent, { Tab, Name, Content } from '../common/TabbedComponent.react';
import StackComponent from '../common/StackComponent.react';
import LocationMap from './LocationMap.react';

class DetailsComponent extends React.Component {

  displayName = "DetailsComponent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="max-width-container">
          <div className="centered col-75 ">
            <div className="container">
              <TabbedComponent>
                <Tab>
                  <Name>Personal information</Name>
                  <Content>
                    <div className="padded">
                      <h1>Personal information</h1>
                      <span><i>These are some facts about me.</i></span>
                      <dl>
                        <dt className="col-33">Name</dt>
                        <dd className="col-66">Daffy Duck Senior</dd>

                        <dt className="col-33">Birthday</dt>
                        <dd className="col-66">12.3.1994</dd>

                        <dt className="col-33">Born</dt>
                        <dd className="col-66">Ljubljana</dd>

                        <dt className="col-33">Relationship status</dt>
                        <dd className="col-66">It's complicated</dd>
                      </dl>
                    </div>
                  </Content>
                </Tab>

                <Tab>
                  <Name>Contact information</Name>
                  <Content>
                    <div className="padded">
                      <h1>Contact information</h1>
                      <span><i>This is how you can reach me.</i></span>
                      <dl>
                        <dt className="col-33">Email</dt>
                        <dd className="col-66">daffy.duck@narnia-mail.foo</dd>

                        <dt className="col-33">Home address</dt>
                        <dd className="col-66"><i>This person has chosen not to share this information</i></dd>

                        <dt className="col-33">GSM</dt>
                        <dd className="col-66">+932-39-666-666-666</dd>
                      </dl>
                    </div>
                  </Content>
                </Tab>

                <Tab>
                  <Name>About me</Name>
                  <Content>
                    <div className="padded">
                      <h1>About me</h1>
                      <h2>Hello there!</h2>
                      <h3>Foreword</h3>
                      <p>My name is Daffy Duck, and you probably know me from
                        whatever the heck tv show you used to watch on tv. You
                        see, times haven't been that great for me. And I'm gonna
                        tell you why.</p>
                      <h3>My life</h3>
                      <p>You see, I liked my goat, Francis, far too much for
                        anyones taste. Me and him, we were best pals, we did
                        everything together. You have no idea what that little
                        goat meant to me. Nobody did. Nobody understood.
                        Sometimes
                        I got the feeling Francis himself didn't know. He would
                        just lay there motionless at times, like he was waiting
                        for something. And it was at times like those, I knew he
                        needed my help. It was at those times you could really
                        tell he wasn't feeling all that great, his body felt
                        very
                        cold. Not that it ever felt warm, just sometimes it felt
                        warmer. But even though he was strange at times, we were
                        best of friends. We never argued, he was the strong
                        silent
                        type.</p>
                      <p>But the pressure got to him I think. Everybody around
                        us
                        always looked at us like we were crazy or something.
                        They
                        would look disgusted,and sometimes they made the gesture
                        like something stank really badly. How would I know
                        though, I don't have a nose, and I really can't smell
                        with
                        my beak.</p>
                      <p>More on Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aliquam aliquid asperiores atque
                        ducimus
                        esse excepturi id nihil nisi omnis placeat quae
                        quibusdam
                        repudiandae, unde? Architecto culpa deleniti dolorem
                        doloribus eligendi eveniet inventore ipsam labore,
                        maiores
                        natus nemo non, possimus praesentium quaerat quam qui
                        quisquam quod reprehenderit ullam, vel vero
                        voluptatum?</p>
                    </div>
                  </Content>
                </Tab>

              </TabbedComponent>
            </div>
          </div>
        </div>
    );
  }

}

export default DetailsComponent;