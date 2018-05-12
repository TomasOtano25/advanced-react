import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import storeProvider from '../storeProvider';

const Frame = styled.div`
  padding: 0 0 10px 0;
  border-bottom-style: solid;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 0.85rem;
  color: #888;
`;

const Author = styled.a`
  padding: 10px 0;
`;

const Body = styled.div`
  padding: 0 0 0 20px;
`;

const Article = ({ article, store }) => {
  const author = store.lookupAuthor(article.authorId);

  return (
    <Frame>
      <Title>{article.title}</Title>
      <Date>{article.date}</Date>
      <Author href={author.website}>{`${author.firstName} ${author.lastName}`}</Author>
      <Body>{article.body}</Body>
      <br />
    </Frame>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

/* const ArticleContainer = (props, { store }) => <Article {...props} store={store} />;

ArticleContainer.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

ArticleContainer.contextTypes = {
  store: PropTypes.object,
};*/

export default storeProvider(Article);
