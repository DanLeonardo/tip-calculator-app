const CustomAmount = (props) => {
  return (
    <div className="tip-amount-item">
      <div className="tip-amount-input custom">
        <span>
          <input
            type="number"
            step="0.01"
            placeholder="Custom"
            value={props.input.value}
            onChange={props.input.onChange}
          ></input>
        </span>
      </div>
    </div>
  );
};

export default CustomAmount;
