import React from 'react';

import { storiesOf } from '@storybook/react';
import Table from './Table';
import Square from './Square';

const stories = storiesOf('Table', module);

stories
	.add('Table', () => {
		return <Table />;
	})
	.add('Square', () => {
		return <Square />;
	});
