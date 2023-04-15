import React from 'react';

const CounterControls = ({ onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      plus
    </button>
    <button type="button" onClick={onDecrement}>
      minus
    </button>
  </div>
);

export default CounterControls;
