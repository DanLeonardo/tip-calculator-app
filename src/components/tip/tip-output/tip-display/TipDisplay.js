import CurrencyStringFormatter from '../../../../utils/CurrencyStringFormatter';

const TipDisplay = (props) => {
  const valueString = CurrencyStringFormatter.format(props.value);

  return (
    <div className="tip-display">
      <div className="tip-display-label">
        <div>{props.label}</div>
        <div className="per-person">/ person</div>
      </div>
      <div className="tip-output-txt">{valueString}</div>
    </div>
  );
};

export default TipDisplay;
