// import { stringLength } from './srtingLength.js';
const stringLength = require('./srtingLength');
test('check the string length', () => {
  expect(stringLength('colombia')).toBe(8);
});

test('check the string length', () => {
  expect(stringLength('')).toBe('the string must have 1 to 9 characters');
});