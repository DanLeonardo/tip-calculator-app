import { useState } from 'react';

import TipInputSection from './tip-input/TipInputSection';
import TipOutputSection from './tip-output/TipOutputSection';

import './TipContainer.css';

const TipContainer = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');

  /**
   *
   * @param {*} bill
   * @param {*} tip
   * @param {*} people
   */
  const updateInputs = (bill, tip, people) => {
    setBill(bill);
    setTip(tip);
    setPeople(people);
  };

  const tipData = { billAmount: bill, tipAmount: tip, numPeople: people };

  return (
    <div className="tip-container">
      <TipInputSection updateInputs={updateInputs} />
      <TipOutputSection tipData={tipData} />
    </div>
  );
};

export default TipContainer;
