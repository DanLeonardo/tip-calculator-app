import useInput from '../../../../hooks/useInput';
import { useEffect, useState } from 'react';

import CustomAmount from './CustomAmount';

import './TipAmount.css';

const TIP_AMOUNTS = [5, 10, 15, 20, 25];

const TipAmount = ({ setTipAmount }) => {
  const [tip, setTip] = useState('');
  const customAmount = useInput('');

  // pass tip value up on change
  useEffect(() => {
    setTipAmount(tip);
  }, [tip, setTipAmount]);

  // set tip to customAmount.value when customAmount.value changes
  useEffect(() => {
    setTip(customAmount.value);
  }, [customAmount.value]);

  /**
   * Set tip to the amount of the tip-amount-item when clicked.
   * @param {string} amount
   */
  const onClickTipAmountElement = (amount) => {
    setTip(amount);
  };

  const tipAmountElements = TIP_AMOUNTS.map((e) => {
    return (
      <div
        key={'tip-amount-' + e}
        className="tip-amount-item"
        onClick={() => {
          onClickTipAmountElement(e);
        }}
      >
        <div
          className={
            'tip-amount-input' + (e === parseInt(tip) ? ' selected' : '')
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
      <CustomAmount input={customAmount} />
    </div>
  );
};

export default TipAmount;
