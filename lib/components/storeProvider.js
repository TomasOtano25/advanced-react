import React from 'react';
import PropTypes from 'prop-types';

function storeProvider(Component) {
  const WithStore = (props, { store }) => <Component {...props} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.object,
  };

  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
}

/* function storeProvider(Component) {
  return class extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    static displayName = `${Component.name}Container`;

    render() {
      return <Component {...this.props} store={this.context.store} />;
    }
  };
} */
export default storeProvider;
