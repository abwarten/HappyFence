import React from 'react';

import { storiesOf } from '@storybook/react';
import AdminLeftNav from '../components/AdminLeftNav';

const stories = storiesOf('AdminLeftNav', module);

stories.add('AdminLeftNav', () => {
	return <AdminLeftNav />;
});
