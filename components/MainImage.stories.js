import React from 'react';

import { storiesOf } from '@storybook/react';
import MainImage from '../components/MainImage';

const stories = storiesOf('MainImage', module);

stories.add('MainImage', () => {
	return <MainImage />;
});
