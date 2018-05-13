import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArticleList;
