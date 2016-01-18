import { combineReducers } from 'redux'
import { CHANGE_TEXT, DESTORY_TEXT } from '../actions/actions'

function text(state = '', action){
  switch (action.type) {
    case CHANGE_TEXT:
      return action.text;
    case DESTORY_TEXT:
      return '';
    default:
      return state;
  }
}

const todoApp = combineReducers({
  text
})

export default todoApp