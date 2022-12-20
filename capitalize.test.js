const capitalize = require('./capitalize.js');

test('the first character capitalized', () => {
  expect(capitalize('vanessa')).toBe('Vanessa');
});

test('check the string', () => {
  expect(capitalize(2022)).toBe('It is not a string');
});