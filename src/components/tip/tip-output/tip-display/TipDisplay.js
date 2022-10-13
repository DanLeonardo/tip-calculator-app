import CurrencyStringFormatter from '../../../../utils/CurrencyStringFormatter';

const TipDisplay = ({ value, label, subtitle }) => {
  const valueString = CurrencyStringFormatter.format(value);

  return (
    <div className="tip-display">
      <div className="tip-display-label">
        <div>{label}</div>
        {subtitle ? <div className="tip-display-subtitle">{subtitle}</div> : ''}
      </div>
      <div className="tip-output-txt">{valueString}</div>
    </div>
  );
};

export default TipDisplay;
