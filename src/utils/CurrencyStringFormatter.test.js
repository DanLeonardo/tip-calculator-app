import CurrencyStringFormatter from './CurrencyStringFormatter';

describe('CurrencyStringFormatter', () => {
  test('basic dollar test', () => {
    const input = '1.00';
    const output = CurrencyStringFormatter.format(input);
    expect(output).toBe('$1.00');
  });

  test('no decimal test', () => {
    const input = '50';
    const output = CurrencyStringFormatter.format(input);
    expect(output).toBe('$50.00');
  });

  test('decimal test', () => {
    const input = '42.85';
    const output = CurrencyStringFormatter.format(input);
    expect(output).toBe('$42.85');
  });

  test('non string test', () => {
    const input = 82.65;
    const output = CurrencyStringFormatter.format(input);
    expect(output).toBe('$82.65');
  });
});
