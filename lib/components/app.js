import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './articles/ArticleList';
import SearchBar from './searchBar/SearchBar';
import Timestamp from './Timestamp';

export default class App extends PureComponent {
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

  state = this.appState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  /* shouldComponentUpdate(nextProps) {
    return (
      nextProps.articles !== this.state.articles || nextProps.searchTerm !== this.state.searchTerm
    );
  } */

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  onStoreChange() {
    this.setState(this.appState());
  }

  appState() {
    const { articles, searchTerm } = this.props.store.getState();
    return {
      articles,
      searchTerm,
    };
  }

  render() {
    let { articles } = this.state;
    const { searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(
        articles,
        value => value.title.match(searchRE) || value.body.match(searchRE),
      );
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
        {/* ArticleList({ articles }) */}
      </div>
    );
  }
}
