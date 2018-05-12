import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <div>
    {Object.values(articles).map(article => <Article key={article.id} article={article} />)}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArticleList;
