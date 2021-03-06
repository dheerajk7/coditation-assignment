import { combineReducers } from 'redux';
import users from './users';
import repository from './repository';
import progress from './progress';

// setting both the reducer in as single reducer in store
export default combineReducers({
  users,
  repository,
  progress,
});
