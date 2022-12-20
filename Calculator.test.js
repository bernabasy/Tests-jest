const Calculator = require('./calculator.js');

describe('check operations', () =>{
  const calculator = new Calculator();

  test('valid add', () => {
    expect(calculator.add(240, 100)).toBe(340);
    expect(calculator.add(120, 15)).toBe(135);
    expect(calculator.add(5, 2)).toBe(7);
  });

  test('valid subtract', () => {
    expect(calculator.subtract(38, 72)).toBe(-34);
    expect(calculator.subtract(15, 8)).toBe(7);
    expect(calculator.subtract(10, 35)).toBe(-25);
  });

  test('valid divide', () => {
    expect(calculator.divide(42, 8)).toBe(5.25);
    expect(calculator.divide(0, 8)).toBe(0);
    expect(calculator.divide(10, 0)).toBe('Error');
  });

  test('valid multiply', () => {
    expect(calculator.multiply(8, 10)).toBe(80);
    expect(calculator.multiply(3, 25)).toBe(75);
    expect(calculator.multiply(0, 8)).toBe(0);
  });
});
