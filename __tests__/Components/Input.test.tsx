import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../../App/Components/Input';

it('ImperialInput renders correctly', () => {
  const tree = renderer
    .create(<Input label="Weight" value="100" onChangeText={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
