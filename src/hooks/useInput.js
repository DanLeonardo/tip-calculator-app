import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  /**
   *
   * @param {Event} event
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return { value, setValue, onChange: handleChange };
};

export default useInput;
