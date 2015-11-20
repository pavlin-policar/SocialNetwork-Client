import './TabbedComponent.scss';

import React from 'react';
import InlineComponent from './InlineComponent.react';

/**
 * Tabbed component, using an inline layout.
 *
 * Usage:
 * <TabbedComponent>
 *
 *   // If you only have one tab, what's the point ^^
 *   <Tab>
 *
 *     Names must be unique
 *     <Name>The display name of the tab in the sidebar</Name>
 *
 *     You can stick anything you want in here
 *     <Content>This will be rendered inside the viewbox</Content>
 *
 *   </Tab>
 * </TabbedComponent>
 */
class TabbedComponent extends React.Component {

  displayName = "TabbedComponent";

  state = {
    activeChild: null
  };

  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  componentWillMount() {
    let tabs = React.Children.toArray(this.props.children)
        .filter(child => child.type === Tab);

    // default to first tab as active
    if (this.state.activeChild === null) {
      let first = tabs[0].props.children.filter(
          child => child.type === Name)[0];
      this.setState({ activeChild: first.props.children })
    }
  }

  render() {
    // extract only Tab children, anything else is invalid and will be ignored
    let tabs = React.Children.toArray(this.props.children)
        .filter(child => child.type === Tab);

    // extract tab names from own children within Tab elements
    let tabNames = tabs.map(tab => {
      return tab.props.children.filter(child => child.type === Name);
    });
    let tabNamesArray = [].concat.apply([], tabNames);
    let tabNamesElements = tabNamesArray.map(tabName => {
      let tabText = React.Children.only(tabName).props.children;
      return (
          <Name
              key={tabText}
              name={tabText}
              active={tabText == this.state.activeChild}
              onTabClick={this._handleTabClick}>
            {tabText}
          </Name>
      );
    });

    // find the tab content that should be active given a state
    let tabContent = tabs.filter(tab =>
        tab.props.children[0].props.children == this.state.activeChild
    );
    // pass children from tab content down into child
    // traversal: tabContent(Tab) -> 1st child(Content) -> children: text
    tabContent = tabContent[0].props.children[1].props.children;

    return (
        <InlineComponent className="tabbed-component">
          <nav className="col-25 tabbed-nav">
            {tabNamesElements}
          </nav>
          <div className="col-75 tabbed-viewbox">
            <Content>
              {tabContent}
            </Content>
          </div>
        </InlineComponent>
    );
  }

  _handleTabClick(target) {
    if (this.state.activeChild != target) {
      this.setState({ activeChild: target });
    }
  }
}

/**
 * Tab is more or less of a semantical element, no render value, but it makes
 * defining tabs very easy.
 */
class Tab extends React.Component {

  displayName = "TabbedComponentTab";

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

/**
 * This is the component that displays in the tab navigation. When the element
 * is active, the `active` class is added.
 */
class Name extends React.Component {

  displayName = "TabbedComponentName";

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    return (
        <span
            className={'tabbed-nav-tab' + (this.props.active ? ' active' : '')}
            onClick={this._handleClick}>
          {this.props.children}
        </span>
    );
  }

  _handleClick(e) {
    e.preventDefault();
    this.props.onTabClick(this.props.name);
  }
}

/**
 * This is the component that renders in the viewport.
 */
class Content extends React.Component {

  displayName = "TabbedComponentContent";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="padded tabbed-content">
          {this.props.children}
        </div>
    );
  }
}

export default TabbedComponent;
export { Tab, Name, Content };