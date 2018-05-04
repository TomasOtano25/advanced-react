import React, { Component } from "react";
import DataApi from "../DataApi";
import { data } from "../testData";

import ArticleList from "./articles/ArticleList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = new DataApi(data);
  }
  state = {
    articles: {},
    authors: {}
  };

  componentDidMount() {
    this.setState({
      articles: this.data.getArticles(),
      authors: this.data.getAuthors()
    });
  }

  articleActions = {
    lookupAuthor: authorId => {
      return this.state.authors[authorId];
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}
