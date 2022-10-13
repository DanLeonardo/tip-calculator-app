class CurrencyStringFormatter {
  /**
   *
   * @param {Integer | string} amount
   */
  format(amount) {
    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: '2',
    });

    return currency.format(amount);
  }
}

export default new CurrencyStringFormatter();
