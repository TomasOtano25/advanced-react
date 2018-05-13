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

const storeProvider = extraProps => Component =>
  class extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object,
    };

    static displayName = `${Component.name}Container`;

    constructor(props) {
      super(props);

      this.onStoreChange = this.onStoreChange.bind(this);
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
    }

    onStoreChange() {
      this.forceUpdate();
    }

    render() {
      return (
        <Component
          {...this.props}
          {...extraProps(this.context.store, this.props)}
          store={this.context.store}
        />
      );
    }
  };

export default storeProvider;
