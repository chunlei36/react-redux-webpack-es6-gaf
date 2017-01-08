import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import counter from './counterReducers';

const rootReducer = combineReducers({
  counter,
  routing // handle router state by react-router-redux
});

export default rootReducer;
