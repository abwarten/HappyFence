import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';

import ContactDetailPatchButton from '../components/ContactDetailPatchButton';

const Test = (props) => {
	return (
		<>
			<ContactDetailPatchButton props={props}/>
		</>
	);
};

Test.getInitialProps = async (ctx) => {
	const apiUrl = `http://localhost:8000/api/v1/contact/`;

	const redirectOnError = () =>
		typeof window !== 'undefined' ? Router.push('/signin') : ctx.res.writeHead(302, { Location: '/signin' }).end();

	try {
		const response = await fetch(apiUrl, {
			method: 'GET'
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

export default Test;
