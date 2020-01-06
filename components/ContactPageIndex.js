import React from 'react';
import ContactForm from './ContactForm';

class InputPage extends React.Component {
	handleCreate = (data) => {
		fetch('http://localhost:8000/api/v1/contact/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	};

	render() {
		return (
			<div>
				<ContactForm onCreate={this.handleCreate} />
			</div>
		);
	}
}

export default InputPage;
