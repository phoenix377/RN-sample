import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import ImperialInput from '../../App/Components/ImperialInput';

it('ImperialInput renders correctly', () => {
  const tree = renderer
    .create(
      <ImperialInput label="Height" value="180" onChangeText={jest.fn()} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
