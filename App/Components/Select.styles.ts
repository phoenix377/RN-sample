import { TextStyle, ViewStyle } from 'react-native';

export const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  width: '100%',
};

export const PILL_BASE: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#e8f5e9',
};

export const PILL_SELECTED: ViewStyle = { backgroundColor: '#4caf50' };
export const PILL_TEXT: TextStyle = { color: 'black', fontSize: 15 };
export const PILL_TEXT_SELECTED: TextStyle = { ...PILL_TEXT, color: 'white' };

export const PILL_LEFT: ViewStyle = {
  ...PILL_BASE,
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
};

export const PILL_RIGHT: ViewStyle = {
  ...PILL_BASE,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
};
