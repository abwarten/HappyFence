import React from 'react';
import ContactInfo from './ContactInfo';
import './ContactInfo.scss';

class ContactInfoList extends React.Component {
	static defaultProps = {
		data: [],
		onUpdate: () => console.warn('onUpdate not defined')
	};

	render() {
		const { data, onUpdate } = this.props;
		const list = data.map((info) => <ContactInfo key={info.id} info={info} onUpdate={onUpdate} />);

		return <div>{list}</div>;
	}
}

export default ContactInfoList;
