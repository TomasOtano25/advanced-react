import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ArticleList from '../articles/ArticleList';

describe('ArticleList', () => {
  const testData = {
    articles: { a: { id: 'a' }, b: { id: 'b' } },
    store: { lookupAuthor: jest.fn(() => ({})) },
  };

  it('renders conrrectly', () => {
    // const element = renderer.create(<div>Hello</div>).toJSON();

    const tree = renderer.create(<ArticleList {...testData} />).toJSON();

    // console.log(tree);
    expect(tree).toMatchSnapshot();
    expect(tree.children).toHaveLength(2);
    // u = actualizar instancia
  });
});
