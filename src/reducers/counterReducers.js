import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from 'constants/ActionTypes';

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.num;
    case DECREMENT_COUNTER:
      return state - action.num;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
}

export default counter;
