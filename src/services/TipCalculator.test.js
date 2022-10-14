import TipCalculator from './TipCalculator';

describe('TipCalculator', () => {
  test('basic tip test', () => {
    const bill = '100.00';
    const tip = '25';
    const people = '1';

    const tipData = TipCalculator.calculateTip(bill, people, tip);

    expect(tipData.tipPerPerson).toBe(25);
    expect(tipData.totalPerPerson).toBe(125);
    expect(tipData.totalBill).toBe(125);
  });

  test('2 person tip', () => {
    const bill = '100.00';
    const tip = '20';
    const people = '2';

    const tipData = TipCalculator.calculateTip(bill, people, tip);

    expect(tipData.tipPerPerson).toBe(10);
    expect(tipData.totalPerPerson).toBe(60);
    expect(tipData.totalBill).toBe(120);
  });

  test('non integer tip', () => {
    const bill = '478.25';
    const tip = '18';
    const people = '1';

    const tipData = TipCalculator.calculateTip(bill, people, tip);

    expect(tipData.tipPerPerson).toBe(86.085);
    expect(tipData.totalPerPerson).toBe(564.335);
    expect(tipData.totalBill).toBe(564.335);
  });
});
