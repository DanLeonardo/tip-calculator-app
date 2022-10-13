import TipDisplay from './tip-display/TipDisplay';
import TipCalculator from '../../../services/TipCalculator';

import './TipOutput.css';

/**
 *
 * @param {{tipData: {billAmount: string, numPeople: string, tipAmount: string}}} props
 * @returns
 */
const TipOutputSection = ({ tipData }) => {
  const calculatedTip = TipCalculator.calculateTip(
    tipData.billAmount,
    tipData.numPeople,
    tipData.tipAmount
  );

  const tipTotal = calculatedTip.totalTip;
  const tipPerPerson = calculatedTip.tipPerPerson;
  const totalBill = calculatedTip.totalBill;

  return (
    <div className="tip-section-container tip-output-section">
      <div className="tip-section">
        <TipDisplay label="Tip amount" subtitle="/ person" value={tipTotal} />
        <TipDisplay label="Amount" subtitle="/ person" value={tipPerPerson} />
        <TipDisplay label="Bill Total" value={totalBill} />
        <div className="reset-spacer"></div>
        <div className="reset-section">
          <button>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default TipOutputSection;
