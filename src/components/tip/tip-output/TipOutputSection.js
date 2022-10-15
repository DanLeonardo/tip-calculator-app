import TipDisplay from './tip-display/TipDisplay';
import TipCalculator from '../../../services/TipCalculator';

import './TipOutput.css';

/**
 *
 * @param {*} props
 * @returns
 */
const TipOutputSection = ({ tipData, resetHandler }) => {
  const { bill, tip, people } = tipData;

  const calculatedTip = TipCalculator.calculateTip(bill, people, tip);

  const tipTotal = calculatedTip.tipPerPerson;
  const totalPerPerson = calculatedTip.totalPerPerson;
  const totalBill = calculatedTip.totalBill;

  return (
    <div className="tip-section-container tip-output-section">
      <div className="tip-section">
        <TipDisplay label="Tip amount" subtitle="/ person" value={tipTotal} />
        <TipDisplay label="Total" subtitle="/ person" value={totalPerPerson} />
        <TipDisplay label="Bill Total" value={totalBill} />
        <div className="reset-spacer"></div>
        <div className="reset-section">
          <button onClick={resetHandler}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default TipOutputSection;
