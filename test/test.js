const calculator = require('../src/index');

describe('Calculator Tests', () => {
  test('Addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('Subtraction', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('Multiplication', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test('Division', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('Division by zero throws error', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
