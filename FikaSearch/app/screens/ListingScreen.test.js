import React from 'react';
import renderer from 'react-test-renderer';
import ListingsScreen from './ListingsScreen';

describe(ListingsScreen.name, () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ListingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
