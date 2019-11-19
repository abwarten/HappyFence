import React from 'react';

import { storiesOf } from '@storybook/react';
import Table from './Table';
import Square from './Square';
import DayList from './DayList';

const stories = storiesOf('Table', module);

stories
	.add('Table', () => {
		return <Table />;
	})
	.add('Square', () => {
		return <Square />;
	})
	.add('DayList', () => {
		return <DayList />;
	});
