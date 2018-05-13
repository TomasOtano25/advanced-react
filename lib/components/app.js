import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './articles/ArticleList';
import SearchBar from './searchBar/SearchBar';
import Timestamp from './Timestamp';

export default class App extends Component {
  static propTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.onStoreChange = this.onStoreChange.bind(this);
  }

  state = this.props.store.getState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange() {
    this.setState(this.props.store.getState());
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
        <Timestamp />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} store={this.props.store} />
      </div>
    );
  }
}
