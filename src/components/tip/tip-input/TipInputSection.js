import TitledInput from '../../common/TitledInput';
import TipAmount from './tip-amount/TipAmount';

import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';

/**
 *
 * @param {*} props
 * @returns
 */
const TipInputSection = ({ bill, tip, people }) => {
  return (
    <div className="tip-section-container">
      <div className="tip-section">
        <TitledInput
          title="Bill"
          icon={dollarIcon}
          alt="dollar icon"
          input={bill}
        />
        <div className="titled-input-section">
          <div className="titled-input-title">Select Tip %</div>
          <TipAmount input={tip} />
        </div>
        <TitledInput
          title="Number of People"
          icon={personIcon}
          alt="person icon"
          input={people}
        />
      </div>
    </div>
  );
};

export default TipInputSection;
