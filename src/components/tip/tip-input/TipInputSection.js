import { useEffect, useState } from 'react';
import useInput from '../../../hooks/useInput';

import TitledInput from '../../common/TitledInput';
import TipAmount from './tip-amount/TipAmount';

import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';

const TipInputSection = ({ updateInputs }) => {
  const billInput = useInput('');
  const peopleInput = useInput('');
  const [tipAmount, setTipAmount] = useState('');

  useEffect(() => {
    updateInputs(billInput.value, tipAmount, peopleInput.value);
  }, [updateInputs, billInput.value, peopleInput.value, tipAmount]);

  return (
    <div className="tip-section-container">
      <div className="tip-section">
        <TitledInput title="Bill" icon={dollarIcon} input={billInput} />
        <div className="titled-input-section">
          <div className="titled-input-title">Select Tip %</div>
          <TipAmount amount={tipAmount} setTipAmount={setTipAmount} />
        </div>
        <TitledInput
          title="Number of People"
          icon={personIcon}
          input={peopleInput}
        />
      </div>
    </div>
  );
};

export default TipInputSection;
