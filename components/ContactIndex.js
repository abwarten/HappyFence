import React from 'react';
import ContactInfoList from './ContactInfoList';
import './ContactInfo.scss';

class ContactIndex extends React.Component {
	state = {
		information: null,
		loading: false
	};
	componentDidMount() {
		fetch('http://localhost:8000/api/v1/contact/')
			.then((response) => response.json())
			.then((information) => this.setState({ information: information.results, loading: true }));
	}

	handleUpdate = (id, data) => {
		const { information } = this.state;
		fetch(`http://localhost:8000/api/v1/contact/${id}/`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(
			this.setState({
				information: information.map((info) => (id === info.id ? { ...info, ...data } : info))
			})
		);
	};
	render() {
		const { information, loading } = this.state;
		if (!loading) {
			return <div>Loading...</div>;
		}
		return (
			<>
				<ContactInfoList data={information} onUpdate={this.handleUpdate} />
			</>
		);
	}
}

export default ContactIndex;
