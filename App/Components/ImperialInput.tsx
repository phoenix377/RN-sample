import React, { useEffect } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from 'react-native';
import { feetToMeters, metersToFeet } from '../utils';

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

type ImperialInputProps = TextInputProps & {
  label: string;
  error?: boolean;
};

const ImperialInput: React.FC<ImperialInputProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';
  const [valueFt, setValueFt] = React.useState('');
  const [valueInch, setValueInch] = React.useState('');
  const onChangeText = props.onChangeText;
  useEffect(() => {
    const newValue: number = feetToMeters(
      (
        parseInt(valueFt || '0', 10) +
        parseInt(valueInch || '0', 10) / 12
      ).toString(),
    );
    console.log('props.onChangeText', newValue);
    onChangeText?.(newValue.toString());
  }, [valueFt, valueInch, onChangeText]);

  useEffect(() => {
    if (!props.value) {
      return;
    }
    console.log('props.value', props.value);
    const imp = metersToFeet(props.value || '0');
    const ft = Math.floor(imp);
    const inch = Math.round((imp - ft) * 12);
    setValueFt(ft.toString());
    setValueInch(inch.toString());
  }, [props.value]);

  return (
    <View style={[CONTAINER, props.error ? ERROR : null]}>
      <TextInput
        style={[
          isDarkMode ? TEXT_INPUT_DARK : TEXT_INPUT,
          props.error ? TEXT_INPUT_ERROR : null,
        ]}
        onBlur={props.onBlur}
        onChangeText={setValueFt}
        value={valueFt}
        placeholder={props.placeholder}
      />
      {props.label && (
        <View style={LABEL_CONTAINER}>
          <Text style={isDarkMode ? LABEL_DARK : LABEL}>ft</Text>
        </View>
      )}
      <TextInput
        style={[
          isDarkMode ? TEXT_INPUT_DARK : TEXT_INPUT,
          props.error ? TEXT_INPUT_ERROR : null,
        ]}
        onBlur={props.onBlur}
        onChangeText={setValueInch}
        value={valueInch}
        placeholder={props.placeholder}
      />
      {props.label && (
        <View style={LABEL_CONTAINER}>
          <Text style={isDarkMode ? LABEL_DARK : LABEL}>in</Text>
        </View>
      )}
    </View>
  );
};

export default ImperialInput;
