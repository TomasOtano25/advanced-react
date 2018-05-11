import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DataApi from '../DataApi';

// import { data } from '../testData.json';

import ArticleList from './articles/ArticleList';

export default class App extends Component {
  static propTypes = {
    initialData: PropTypes.objectOf(
      PropTypes.shape({ articles: PropTypes.object, authors: PropTypes.object }),
    ),
  };

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  async componentWillMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    });
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
      </div>
    );
  }
}

App.defaultProps = {
  initialData: {
    articles: {},
    authors: {},
  },
};
