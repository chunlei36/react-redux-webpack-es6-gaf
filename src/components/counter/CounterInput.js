import React, { PropTypes } from 'react';

const CounterInput = ({ value, handleChange, handleFoucs, handleBlur }) => {
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        onFocus={handleFoucs}
        onBlur={handleBlur}
        placeholder='输入数字'
      />
    </div>
  );
};

CounterInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleFoucs: PropTypes.func,
  handleBlur: PropTypes.func
};

export default CounterInput;
