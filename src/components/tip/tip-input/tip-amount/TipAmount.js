import useInput from '../../../../hooks/useInput';
import { useEffect } from 'react';

import CustomAmount from './CustomAmount';

import './TipAmount.css';

const TIP_AMOUNTS = [5, 10, 15, 20, 25];

const TipAmount = ({ input }) => {
  const customAmount = useInput('');
  const setInput = input.setValue;

  useEffect(() => {
    setInput(customAmount.value);
  }, [customAmount.value, setInput]);

  /**
   * Set tip to the amount of the tip-amount-item when clicked.
   * @param {string} amount
   */
  const onClickTipAmount = (amount) => {
    input.setValue(amount);
  };

  const tipAmountElements = TIP_AMOUNTS.map((e) => {
    return (
      <div
        key={'tip-amount-' + e}
        className="tip-amount-item"
        onClick={() => {
          onClickTipAmount(e);
        }}
      >
        <div
          className={
            'tip-amount-input' +
            (e === parseInt(input.value) ? ' selected' : '')
          }
        >
          {e}%
        </div>
      </div>
    );
  });

  return (
    <div className="tip-amount-container">
      {tipAmountElements}
      <CustomAmount input={customAmount} onClickHandler={onClickTipAmount} />
    </div>
  );
};

export default TipAmount;
