import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from 'react-native';

import {
  CONTAINER,
  ERROR,
  LABEL,
  LABEL_CONTAINER,
  LABEL_DARK,
  TEXT_INPUT,
  TEXT_INPUT_DARK,
  TEXT_INPUT_ERROR,
} from './Input.styles';

type InputProps = TextInputProps & {
  label: string;
  error?: boolean;
};

const Input: React.FC<InputProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[CONTAINER, props.error ? ERROR : null]}>
      <TextInput
        style={[
          isDarkMode ? TEXT_INPUT_DARK : TEXT_INPUT,
          props.error ? TEXT_INPUT_ERROR : null,
        ]}
        onBlur={props.onBlur}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.label && (
        <View style={LABEL_CONTAINER}>
          <Text style={isDarkMode ? LABEL_DARK : LABEL}>{props.label}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
