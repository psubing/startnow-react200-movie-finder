import { combineReducers } from 'redux';
import searchReducer from './containers/reducers';

const rootReducer = combineReducers({
// add reducers
  search: searchReducer
});

export default rootReducer;
