import React from 'react';

import { storiesOf } from '@storybook/react';
import Footer from '../components/Footer';

const stories = storiesOf('Footer', module);

stories.add('Footer', () => {
	return <Footer />;
});
