import React from 'react';

import { storiesOf } from '@storybook/react';
import Introduction from '../components/Introduction';

const stories = storiesOf('Introduction', module);

stories.add('Introduction', () => {
	return <Introduction />;
});
