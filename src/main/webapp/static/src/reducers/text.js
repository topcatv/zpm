import utils from '../common/utils';
const CHANGE_TEXT = 'CHANGE_TEXT';
const DESTORY_TEXT = 'DESTORY_TEXT';

export default function text(state = '', action){
  switch (action.type) {
    case CHANGE_TEXT:
      return action.text;
    case DESTORY_TEXT:
      return '';
    default:
      return state;
  }
}

/*
 * action 创建函数
 */
export function changeText(text){
	//return { type: CHANGE_TEXT, text }
	return dispatch => {
		return utils.get('test', {fu: text})
			.then(res => res.text())
			.then(res_text => dispatch({ type: CHANGE_TEXT, text: res_text }));
	}
}

export function destoryText(){
	return { type: DESTORY_TEXT }
}