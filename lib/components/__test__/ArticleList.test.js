import React from 'react';
import { shallow } from 'enzyme';

import Article from '../articles/Article';
import ArticleList from '../articles/ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', title: 'a', date: 'a', authorId: 'a', body: 'a' },
      b: { id: 'b', title: 'b', date: 'a', authorId: 'b', body: 'b' },
    },
  };

  Article.propTypes = {};

  it('renders conrrectly', () => {
    // const element = renderer.create(<div>Hello</div>).toJSON();

    const wrapper = shallow(<ArticleList {...testProps} />);

    expect(wrapper.find('ArticleContainer')).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
    // u = actualizar instancia
  });
});
