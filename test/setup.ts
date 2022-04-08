// we always make sure 'react-native' gets included first
import 'react-native';
import React from 'react';

// libraries to mock
import './mock-rn-fetch-blob';

global.React = React;
jest.useFakeTimers();
declare global {
  let __TEST__: boolean;
}
