import 'react-native';

import {
  feetToMeters,
  isNumber,
  kilosToLbs,
  lbsToKilos,
  metersToFeet,
} from '../App/utils';

it('isNumber works', () => {
  expect(isNumber('1')).toBe(true);
  expect(isNumber('1.2')).toBe(true);
  expect(isNumber('1.2e')).toBe(false);
  expect(isNumber('asd')).toBe(false);
});

it('feetToMeters works', () => {
  expect(feetToMeters('40')).toBe(12.1914050594331);
  expect(feetToMeters('420')).toBe(128.009753124047546);
});

it('metersToFeet works', () => {
  expect(metersToFeet('12')).toBe(39.372);
  expect(metersToFeet('420')).toBe(1378.02);
});

it('lbsToKilos works', () => {
  expect(lbsToKilos('40')).toBe(18.140589569160998);
  expect(lbsToKilos('420')).toBe(190.476190476190476);
});
it('kilosToLbs works', () => {
  expect(kilosToLbs('40')).toBe(88.2);
  expect(kilosToLbs('420')).toBe(926.1);
});
