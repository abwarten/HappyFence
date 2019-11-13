import React from 'react';

import { storiesOf } from '@storybook/react';
import ContactButton from '../components/ContactButton';

const stories = storiesOf('ContactButton', module);

stories.add('ContactButton', () => {
	return <ContactButton />;
});
