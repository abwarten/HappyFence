import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { login } from '../utils/auth';
import nextCookie from 'next-cookies';
import Router from 'next/router';

function Login() {
	const [ userData, setUserData ] = useState({ username: '', password: '', error: '' });

	async function handleSubmit(event) {
		event.preventDefault();
		setUserData(Object.assign({}, userData, { error: '' }));

		const username = userData.username;
		const password = userData.password;
		const url = `http://127.0.0.1:8000/api/v1/auth/login/`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			if (response.status === 200) {
				const { token } = await response.json();
				await login({ token });
			} else {
				console.log('Login failed.');
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		} catch (error) {
			console.error('You have an error in your code or there are Network issues.', error);

			const { response } = error;
			setUserData(
				Object.assign({}, userData, {
					error: response ? response.statusText : error.message
				})
			);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="username"
					name="username"
					value={userData.username}
					onChange={(event) => setUserData(Object.assign({}, userData, { username: event.target.value }))}
				/>
				<input
					type="password"
					id="password"
					name="password"
					value={userData.password}
					onChange={(event) => setUserData(Object.assign({}, userData, { password: event.target.value }))}
				/>

				<button type="submit">Login</button>

				{userData.error && <p className="error">Error: {userData.error}</p>}
			</form>
		</div>
	);
}

Login.getInitialProps = async (ctx) => {
	const { token } = nextCookie(ctx);

	const redirectOnAdmin = () =>
		typeof window !== 'undefined' ? Router.push('/admin') : ctx.res.writeHead(302, { Location: '/admin' }).end();

	if (token !== undefined) {
		redirectOnAdmin();
	}
};

export default Login;
