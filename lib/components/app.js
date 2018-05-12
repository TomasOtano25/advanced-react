import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './articles/ArticleList';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  state = this.props.store.getState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} store={this.props.store} />
      </div>
    );
  }
}
