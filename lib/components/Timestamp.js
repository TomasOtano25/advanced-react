import React, { Component } from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  static propTypes = {
    timestamp: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {};

  componentWillMount() {
    console.log('update');
  }

  shouldComponentUpdate(nextProps) {
    return this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp);
  }

  timeDisplay = timestamp =>
    timestamp.toLocaleTimeString([], {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    });

  render() {
    return <div>{this.timeDisplay(this.props.timestamp)}</div>;
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);
