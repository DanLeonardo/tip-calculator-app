import { useEffect } from 'react';
import useInput from '../../hooks/useInput';

import './TitledInput.css';

/**
 *
 * @param {*} props
 * @returns
 */
const TitledInput = ({ title, icon, alt, input }) => {
  return (
    <div className="titled-input-section">
      <div className="titled-input-title">{title}</div>
      <div className="titled-input">
        <img src={icon} alt={alt}></img>
        <input
          type="number"
          min="0"
          placeholder="0"
          value={input.value}
          onChange={input.onChange}
        ></input>
      </div>
    </div>
  );
};

export default TitledInput;
