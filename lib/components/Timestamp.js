import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  static propTypes = {
    timestamp: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {};

  render() {
    return <div>{this.props.timestamp.toString()}</div>;
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);
