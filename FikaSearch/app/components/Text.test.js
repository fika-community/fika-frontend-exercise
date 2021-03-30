import React from 'react';
import renderer from 'react-test-renderer';
import AppText from './Text';

describe(AppText.name, () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
