import useInput from '../../hooks/useInput';

import TipInputSection from './tip-input/TipInputSection';
import TipOutputSection from './tip-output/TipOutputSection';

import './TipContainer.css';

const TipContainer = () => {
  const bill = useInput('');
  const tip = useInput('');
  const people = useInput('');

  /**
   * Resets state by setting bill, tip, and people to ''.
   */
  const resetInputs = () => {
    console.log('Clearing inputs');
    bill.setValue('');
    tip.setValue('');
    people.setValue('');
  };

  const tipData = { bill: bill.value, tip: tip.value, people: people.value };

  return (
    <div className="tip-container">
      <TipInputSection bill={bill} tip={tip} people={people} />
      <TipOutputSection tipData={tipData} resetHandler={resetInputs} />
    </div>
  );
};

export default TipContainer;
