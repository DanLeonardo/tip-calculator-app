/**
 *
 * @param {*} props
 * @returns
 */
const CustomAmount = ({ input, onClickHandler }) => {
  return (
    <div
      className="tip-amount-item"
      onClick={() => {
        onClickHandler(input.value);
      }}
    >
      <div className="tip-amount-input custom">
        <span>
          <input
            type="number"
            step="0.01"
            placeholder="Custom"
            value={input.value}
            onChange={input.onChange}
          ></input>
        </span>
      </div>
    </div>
  );
};

export default CustomAmount;
