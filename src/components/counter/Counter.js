import React, { PropTypes } from 'react';

const Counter = ({ counter, handleIncrement, handleDecrement, handleReset }) => (
  <div>
    <h1>
      {counter}
    </h1>
    <button onClick={handleDecrement}> - </button>
    <button onClick={handleIncrement}> + </button>
    <br />
    <br />
    <button onClick={handleReset}> Reset </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

Counter.defaultProps = {
  counter: 0
};

export default Counter;
