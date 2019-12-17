import React from 'react';

import { storiesOf } from '@storybook/react';
import AdminLeftNav from './AdminLeftNav';

const stories = storiesOf('Admin', module);

stories.add('AdminLeftNav', () => {
	return <AdminLeftNav />;
});
