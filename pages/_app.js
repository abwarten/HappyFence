import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';

import './_app.scss';

import withReduxStore from '../state/with-store';

class Main extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<>
			
					<Provider store={reduxStore}>
						<Component {...pageProps} />
					</Provider>


			</>
		);
	}
}

export default withReduxStore(Main);
