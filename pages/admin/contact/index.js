import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import nextCookie from 'next-cookies';
import { withAuthSync } from '../../../utils/auth';

import ContactIndex from '../../../components/ContactIndex';

const AdminContact = (props) => {
	return (
		<>
			<ContactIndex />
		</>
	);
};

AdminContact.getInitialProps = async (ctx) => {
	const { token } = nextCookie(ctx);
	const apiUrl = `http://localhost:8000/api/v1/contact/`;

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
			const contacts = await response.json();
			return contacts;
		} else {
			return await redirectOnError();
		}
	} catch (error) {
		return redirectOnError();
	}
};

export default withAuthSync(AdminContact);
