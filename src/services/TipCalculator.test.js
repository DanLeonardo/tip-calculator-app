import TipCalculator from './TipCalculator';

it('basic tip test', () => {
  const bill = '100.00';
  const tip = '25';
  const people = '1';

  const tipData = TipCalculator.calculateTip(bill, people, tip);

  expect(tipData.totalTip).toBe(25);
  expect(tipData.tipPerPerson).toBe(25);
  expect(tipData.totalBill).toBe(125);
});

it('2 person tip', () => {
  const bill = '100.00';
  const tip = '20';
  const people = '2';

  const tipData = TipCalculator.calculateTip(bill, people, tip);

  expect(tipData.totalTip).toBe(20);
  expect(tipData.tipPerPerson).toBe(10);
  expect(tipData.totalBill).toBe(120);
});

it('non integer tip', () => {
  const bill = '478.25';
  const tip = '18';
  const people = '1';

  const tipData = TipCalculator.calculateTip(bill, people, tip);

  expect(tipData.totalTip).toBe(86.085);
  expect(tipData.tipPerPerson).toBe(86.085);
  expect(tipData.totalBill).toBe(564.335);
});
