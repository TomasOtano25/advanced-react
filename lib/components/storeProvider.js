import React from 'react';
import PropTypes from 'prop-types';

/* function storeProvider(Component) {
  const WithStore = (props, { store }) => <Component {...props} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.object,
  };

  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
} */

const storeProvider = (extraProps = () => ({})) => Component =>
  class extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    static displayName = `${Component.name}Container`;

    constructor(props) {
      super(props);

      this.onStoreChange = this.onStoreChange.bind(this);
      // this.usedState = this.usedState.bind(this);
    }

    state = {};

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    onStoreChange() {
      if (this.subscriptionId) {
        // this.forceUpdate();
        this.setState(this.usedState());
      }
    }

    usedState() {
      return extraProps(this.context.store, this.props);
    }

    render() {
      return <Component {...this.props} {...this.usedState()} store={this.context.store} />;
    }
  };

export default storeProvider;
