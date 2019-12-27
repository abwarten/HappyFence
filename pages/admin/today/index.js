import React from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import nextCookie from 'next-cookies';
import { withAuthSync } from '../../../utils/auth';

const Images = (props) => {
	return (
		<div>
			{props.results.map((data) => {
				const image_path = 'https://happyfence.herokuapp.com/media/' + data.image;
				return (
					<div key={data.id}>
						<p>{data.id}</p>
						<img src={image_path} alt="image" />
						<p>{data.created_at}</p>
					</div>
				);
			})}
		</div>
	);
};

Images.getInitialProps = async (ctx) => {
	const { token } = nextCookie(ctx);
	const year = moment().format('YYYY');
	const month = moment().format('MM');
	const apiUrl = `https://happyfence.herokuapp.com/api/v1/today/?year=${year}&month=${month}`;

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
			const TodayList = await response.json();
			return TodayList;
		} else {
			return await redirectOnError();
		}
	} catch (error) {
		return redirectOnError();
	}
};

export default withAuthSync(Images);
