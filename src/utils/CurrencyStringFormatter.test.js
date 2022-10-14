import CurrencyStringFormatter from './CurrencyStringFormatter';

it('basic dollar test', () => {
  const input = '1.00';
  const output = CurrencyStringFormatter.format(input);
  expect(output).toBe('$1.00');
});

it('no decimal test', () => {
  const input = '50';
  const output = CurrencyStringFormatter.format(input);
  expect(output).toBe('$50.00');
});

it('decimal test', () => {
  const input = '42.85';
  const output = CurrencyStringFormatter.format(input);
  expect(output).toBe('$42.85');
});

it('non string test', () => {
  const input = 82.65;
  const output = CurrencyStringFormatter.format(input);
  expect(output).toBe('$82.65');
});
