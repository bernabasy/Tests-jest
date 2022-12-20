const reverseString = require('./reverseString.js');
test('check the reverse string', () => {
    expect(reverseString('microverse')).toBe('esrevorcim');
  });