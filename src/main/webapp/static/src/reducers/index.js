import { combineReducers } from 'redux';
import permissions from './permissions';
import users from './users';
import text from './text';

const reducers = combineReducers({
  text,
  permissions,
  users
})

export default reducers;