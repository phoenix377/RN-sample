import { TextStyle, ViewStyle } from 'react-native';

export const CONTAINER: ViewStyle = {
  height: 300,
};

export const SCROLL_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
};

export const BUTTON_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ERROR_TEXT: TextStyle = {
  marginBottom: 10,
  color: 'red',
};

export const TITLE: TextStyle = {
  textAlign: 'center',
  color: 'black',
};

export const TITLE_DARK: TextStyle = {
  ...TITLE,
  color: 'white',
};
