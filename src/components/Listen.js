import React from 'react';

/**
 * Automatically connect a component to the stores it requires to function
 * properly. This takes out the boilerplate since binding is automatically
 * resolved.
 * All state will be passed down into the props attribute in target class.
 *
 * @param {Array} stores Stores to listen to
 * @param {Function} getStateMethod The function that returns the required
 * state for the component to function.
 * @returns {Function}
 */
export default function Listen(stores, getStateMethod) {

  return function (DecoratedComponent) {

    let displayName =
      DecoratedComponent.displayName ||
      DecoratedComponent.name ||
      'Component';

    return class extends React.Component {

      displayName = `Listen(${displayName})`;

      state = getStateMethod();

      constructor(props) {
        super(props);
        this.handleStoresChanged = this.handleStoresChanged.bind(this);
      }

      render() {
        return <DecoratedComponent {...this.props} {...this.state}/>;
      }

      componentWillMount() {
        for (let i = 0, ln = stores.length; i < ln; ++i) {
          stores[i].addChangeListener(this.handleStoresChanged);
        }
      }

      componentWillUnmount() {
        for (let i = 0, ln = stores.length; i < ln; ++i) {
          stores[i].removeChangeListener(this.handleStoresChanged);
        }
      }

      handleStoresChanged() {
        this.setState(getStateMethod());
      }
    }
  }
}