import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Select from '../../App/Components/Select';
import { TouchableOpacity } from 'react-native';

it('Select renders correctly', () => {
  const tree = renderer
    .create(<Select value="imperial" onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Select calls onChange correctly', () => {
  const tree = renderer
    .create(<Select value="imperial" onChange={jest.fn(x => x)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  const mockCallback = jest.fn();
  const wrapper = shallow(<Select value="metric" onChange={mockCallback} />);

  wrapper
    .find(TouchableOpacity)
    ?.first()
    ?.props()
    ?.onPress?.({} as any);

  wrapper.find(TouchableOpacity).first().simulate('press');
  expect(mockCallback.mock.calls[0][0]).toBe('imperial');
});
