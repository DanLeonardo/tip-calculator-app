import './TitledInput.css';

const TitledInput = (props) => {
  return (
    <div className="titled-input-section">
      <div className="titled-input-title">{props.title}</div>
      <div className="titled-input">
        <img src={props.icon} alt={props.alt}></img>
        <input
          type="number"
          min="0"
          placeholder="0"
          value={props.input.value}
          onChange={props.input.onChange}
        ></input>
      </div>
    </div>
  );
};

export default TitledInput;
