import Router from 'next/router';
require('es6-promise').polyfill();
var axios = require('axios');
import { set_token, set_error, set_isAuth } from '../state/store';

const login = (dispatch, user, pass) => {
	axios
		.post(
			'http://localhost:3000/auth/login',
			{
				email: user,
				password: pass
			},
			{
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache'
				}
			}
		)
		.then((resp) => {
			dispatch(set_isAuth(true));
			dispatch(set_token(resp.data.token));
			Router.push('/admin');
		})
		.catch((err) => {
			console.log(err);
		});
};

const register = (dispatch, user, pass1, pass2) => {
	axios
		.post(
			'http://localhost:3000/auth/register',
			{
				email: user,
				password: pass1,
				password1: pass2
			},
			{
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache'
				}
			}
		)
		.then((resp) => {
			if (resp.data.success) {
				Router.push('/signin');
				// login(dispatch, user, pass1);
			} else dispatch(set_error(resp.data.message));
		});
};

export { register, login };
