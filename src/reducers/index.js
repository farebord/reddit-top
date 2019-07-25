import { combineReducers } from 'redux';
import redditTopReducer from './reddit';

const rootReducer = combineReducers({
  top: redditTopReducer,
});

export default rootReducer;
