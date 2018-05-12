import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './articles/ArticleList';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  state = this.props.store.getState();

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} store={this.props.store} />
      </div>
    );
  }
}
