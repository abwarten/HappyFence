import React from 'react';

import { storiesOf } from '@storybook/react';
import TodayPhoto from './TodayPhotoComponent';

const stories = storiesOf('Today', module);

stories.add('TodayPhoto', () => {
	return <TodayPhoto />;
});
