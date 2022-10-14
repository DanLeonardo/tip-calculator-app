class TipCalculator {
  /**
   *
   * @param {*} billTotal
   * @param {*} numPeople
   * @param {*} tipPercent
   */
  calculateTip(billTotal, numPeople, tipPercent) {
    let billTotalFloat = parseFloat(billTotal);
    let numPeopleInt = parseInt(numPeople);
    let tipPercentFloat = parseFloat(tipPercent);

    if (!billTotalFloat) billTotalFloat = 0;
    if (!numPeopleInt) numPeopleInt = 1;
    if (!tipPercentFloat) tipPercentFloat = 0;

    const totalTip =
      tipPercentFloat !== 0 ? billTotalFloat * (tipPercentFloat / 100.0) : 0;

    const tipPerPerson = totalTip !== 0 ? totalTip / numPeopleInt : 0;
    const totalBill = billTotalFloat + totalTip;
    const totalPerPerson = totalBill / numPeopleInt;

    const tipData = { tipPerPerson, totalPerPerson, totalBill };
    return tipData;
  }
}

export default new TipCalculator();
