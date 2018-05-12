import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  article: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Article;
