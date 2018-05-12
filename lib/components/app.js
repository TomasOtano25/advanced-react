import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './articles/ArticleList';
import SearchBar from './searchBar/SearchBar';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.setSearchTerm = this.setSearchTerm.bind(this);
  }
  state = this.props.store.getState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  render() {
    let { articles } = this.state;
    const { searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(
        articles,
        value => value.title.match(searchTerm) || value.body.match(searchTerm),
      );
    }

    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}
