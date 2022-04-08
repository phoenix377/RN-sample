import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  BASE,
  BASE_TEXT,
  BUTTON_CLEAR,
  TEXT_CLEAR,
  TEXT_SMALL,
} from './Button.styles';

type ButtonProps = TouchableOpacityProps & {
  clear?: boolean;
  small?: boolean;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[BASE, props.clear ? BUTTON_CLEAR : null]}
    >
      <Text
        style={[
          BASE_TEXT,
          props.clear ? TEXT_CLEAR : null,
          props.small ? TEXT_SMALL : null,
        ]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
