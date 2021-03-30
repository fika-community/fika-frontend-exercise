import React from 'react';
import renderer from 'react-test-renderer';
import ActivityIndicator from './ActivityIndicator';

describe(ActivityIndicator.name, () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ActivityIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
