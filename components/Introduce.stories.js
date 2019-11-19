import React from 'react';

import { storiesOf } from '@storybook/react';
import Introduce from '../components/Introduce';

const stories = storiesOf('Introduce', module);

stories.add('Introduce', () => {
	return <Introduce />;
});
