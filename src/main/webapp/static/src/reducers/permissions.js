import utils from '../common/utils';

const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';

export default function permissions(state = '', action){
  switch (action.type) {
    case FETCH_PERMISSIONS:
      return action.permissions;
    default:
      return state;
  }
}

export function fetchPermissions(){
	return dispatch => {
		return utils.get('permissions')
			.then(res => res.json())
			.then(json => dispatch({type: FETCH_PERMISSIONS, permissions: json.permissions}));
	}
}