import utils from '../common/utils';
const USER_SEARCH = 'USER_SEARCH';
const USER_SAVE = 'USER_SAVE';

export default function users(state = {}, action){
  switch (action.type) {
    case USER_SEARCH:
      return action.users;
    case USER_SAVE:
      //console.log(state);
      return Object.assign({}, state, {loading: true, dialog_show: false, form_loading: false, ts: new Date().getTime()});
    default:
      return state;
  }
}

export function user_search(params){
	return dispatch => {
		return utils.get('users', params)
			.then(res => res.json())
			.then(json => dispatch({type: USER_SEARCH, users: {qr: json.qr, total: json.total}}));
	}
}

export function user_save(user){
  return dispatch => {
    return utils.post('users', user)
      .then(res => res.json())
      .then(json => dispatch({type: USER_SAVE, success: true}))
      .catch(function(ex) {
        console.warn('parsing failed', ex);
        dispatch({type: USER_SAVE, success: false});
      });
  }
}