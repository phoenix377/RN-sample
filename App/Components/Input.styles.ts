import { TextStyle, ViewStyle } from 'react-native';

export const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
  height: 40,
  borderColor: '#ccc',
};

export const ERROR: ViewStyle = {
  marginBottom: 0,
  borderColor: 'red',
};

export const TEXT_INPUT_ERROR: ViewStyle = {
  borderColor: 'red',
};

export const TEXT_INPUT: ViewStyle & TextStyle = {
  flex: 1,
  height: 40,
  fontSize: 20,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 20,
  paddingHorizontal: 20,
};

export const TEXT_INPUT_DARK: ViewStyle & TextStyle = {
  ...TEXT_INPUT,
  color: 'white',
};

export const LABEL: TextStyle = {
  marginLeft: 10,
  fontSize: 20,
};

export const LABEL_DARK: TextStyle = {
  ...LABEL,
  color: 'white',
};

export const LABEL_CONTAINER: ViewStyle = {
  width: 40,
};
