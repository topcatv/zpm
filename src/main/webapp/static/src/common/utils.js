import history from './history';
import fetch from 'isomorphic-fetch';
import qs from 'qs';

const utils = {
	goto_page: (path='/', context='admin') => {
		if(location.hash.indexOf(context + '/' + path + '?') == -1)
      history.pushState(null, context + '/' + path);
	},
	post: (url, data, context='/zpm/l/') => {
		return fetch(context + 'login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: 'include',
      body: qs.stringify(data)
    });
	}
};

export default utils;