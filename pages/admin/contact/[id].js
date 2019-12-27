import Router from 'next/router';
import { withAuthSync } from '../../../utils/auth';
import nextCookie from 'next-cookies';
import fetch from 'isomorphic-unfetch';

const Detail = (props) => {
	return (
		<>
			<div>{props.id}</div>
			<div>{props.name}</div>
			<div>{props.time}</div>
			<div>{props.content}</div>
		</>
	);
};

Detail.getInitialProps = async (ctx) => {
	const { token } = nextCookie(ctx);
	const apiUrl = `https://happyfence.herokuapp.com/api/v1/contact/${ctx.query.id}`;

	const redirectOnError = () =>
		typeof window !== 'undefined' ? Router.push('/signin') : ctx.res.writeHead(302, { Location: '/signin' }).end();

	try {
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				Authorization: 'Token ' + token
			}
		});
		
		if (response.ok) {
			const result = await response.json();
			return result;
		} else {
			return await redirectOnError();
		}
	} catch (error) {
		return redirectOnError();
	}
};

export default withAuthSync(Detail);
