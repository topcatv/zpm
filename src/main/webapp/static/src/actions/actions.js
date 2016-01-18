import fetch from 'isomorphic-fetch'
/*
 * action 类型
 */

export const CHANGE_TEXT = 'CHANGE_TEXT';
export const DESTORY_TEXT = 'DESTORY_TEXT';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */
export function changeText(text){
	//return { type: CHANGE_TEXT, text }
	return dispatch => {
		return fetch('/zpm/test?fu='+text)
			.then(res => res.text())
			.then(res_text => dispatch({ type: CHANGE_TEXT, text: res_text }));
	}
}

export function destoryText(){
	return { type: DESTORY_TEXT }
}