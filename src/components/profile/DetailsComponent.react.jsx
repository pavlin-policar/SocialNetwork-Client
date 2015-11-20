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
                    <h1>This is personal information</h1>
                    <p>somthing</p>
                  </Content>
                </Tab>

                <Tab>
                  <Name>Contact information</Name>
                  <Content>
                    <h6>This is contact</h6>
                  </Content>
                </Tab>

                <Tab>
                  <Name>Tab 3</Name>
                  <Content>
                    <h1>This is unimaginative</h1>
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