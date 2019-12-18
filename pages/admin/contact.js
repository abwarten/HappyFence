import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import { withAuthSync } from '../../utils/auth';
import getHost from '../../utils/get-host';

import AdminContactList from '../../components/AdminContactList';

const AdminContact = (props) => {
	// const token = props.token;

	return (
		<>
			<AdminContactList />
		</>
	);
};

AdminContact.getInitialProps = async (ctx) => {
	const { token } = nextCookie(ctx);
	const apiUrl = getHost(ctx.req) + '/api/admin';

	const redirectOnError = () =>
		typeof window !== 'undefined' ? Router.push('/signin') : ctx.res.writeHead(302, { Location: '/signin' }).end();

	try {
		const response = await fetch(apiUrl, {
			credentials: 'include',
			headers: {
				Authorization: token
			}
		});

		if (response.ok) {
			const js = await response.json();
			return js;
		} else {
			return await redirectOnError();
		}
	} catch (error) {
		return redirectOnError();
	}
};

export default withAuthSync(AdminContact);
