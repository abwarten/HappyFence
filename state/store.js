import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import produce from 'immer';

const SET_TOKEN = 'SET_TOKEN';
const SET_ERROR = 'SET_ERROR';
const SET_ISAUTH = 'SET_ISAUTH';

const initial_state = {
	token: '',
	register_error: '',
	isAuth: false
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return produce(state, (draft) => {
				draft.token = action.token;
				console.log(draft.token);
			});
		case SET_ERROR:
			return produce(state, (draft) => {
				draft.register_error = action.error;
				console.log(draft.register_error);
			});
		case SET_ISAUTH:
			return produce(state, (draft) => {
				draft.isAuth = action.isAuth;
				console.log('draft.isAuth : ' + draft.isAuth);
			});
		default:
			return state;
	}
};

const set_token = (token) => ({
	type: SET_TOKEN,
	token: token
});

const set_error = (error) => ({
	type: SET_ERROR,
	error: error
});

const set_isAuth = (isAuth) => ({
	type: SET_ISAUTH,
	isAuth: isAuth
});

const initializeStore = (is = initial_state) => {
	return createStore(reducer, is, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

export { initial_state, initializeStore, set_token, set_error, set_isAuth };
