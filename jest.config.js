const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '@react-native'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  setupFiles: ['<rootDir>/test/setup.ts'],
};
