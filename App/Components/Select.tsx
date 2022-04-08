import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {
  CONTAINER,
  PILL_LEFT,
  PILL_RIGHT,
  PILL_SELECTED,
  PILL_TEXT,
  PILL_TEXT_SELECTED,
} from './Select.styles';

type SelectProps = {
  value: 'imperial' | 'metric';
  onChange: (value: 'imperial' | 'metric') => void;
};

const Select: React.FC<SelectProps> = props => {
  return (
    <View style={CONTAINER}>
      <TouchableOpacity
        style={[PILL_LEFT, props.value === 'imperial' ? PILL_SELECTED : null]}
        onPress={() => props.onChange('imperial')}
      >
        <Text
          style={props.value === 'imperial' ? PILL_TEXT_SELECTED : PILL_TEXT}
        >
          Imperial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[PILL_RIGHT, props.value === 'metric' ? PILL_SELECTED : null]}
        onPress={() => props.onChange('metric')}
      >
        <Text style={props.value === 'metric' ? PILL_TEXT_SELECTED : PILL_TEXT}>
          Metric
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Select;
