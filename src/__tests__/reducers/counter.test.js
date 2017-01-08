import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from 'constants/ActionTypes';
import reducers from 'reducers/counterReducers';

describe('测试 counter reducers', () => {
  let state;

  it('测试 INCREMENT_COUNTER, 返回数值 +1', () => {
    state = reducers(0, { type: INCREMENT_COUNTER, num: 1 });
    expect(state).toEqual(1);
  });

  it('测试 DECREMENT_COUNTER， 返回数值 -1', () => {
    state = reducers(0, { type: DECREMENT_COUNTER, num: 1 });
    expect(state).toEqual(-1);
  });

  it('测试 RESET_COUNTER, 重置数值为 0', () => {
    state = reducers(2, { type: RESET_COUNTER });
    expect(state).toEqual(0);
  });
});
