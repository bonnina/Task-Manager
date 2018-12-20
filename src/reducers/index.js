import { combineReducers } from 'redux';
import home from './home_reducer';
import auth from './auth_reducer';
import load from './load_reducer';
import error from './error_reducer';

export default combineReducers({
  home,
  auth,
  load,
  error
});