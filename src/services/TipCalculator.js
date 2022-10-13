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
    const tipPerPerson = totalTip / numPeopleInt;
    const totalBill = billTotalFloat + totalTip;

    const tipData = { totalTip, tipPerPerson, totalBill };
    return tipData;
  }
}

export default new TipCalculator();
