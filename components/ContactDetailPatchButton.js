import React from 'react';
import Router from 'next/router';
import moment from 'moment';

import './ContactDetailPatchButton.scss';

class ContactDetailPatchButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: false,
			name: '',
			info: '',
			time: '',
			content: ''
		};

		this.NameChangehanle = this.NameChangehanle.bind(this);
		this.InfoChangehanle = this.InfoChangehanle.bind(this);
		this.TimeChangehanle = this.TimeChangehanle.bind(this);
		this.ContentChangehanle = this.ContentChangehanle.bind(this);
		this.FetchContactPatch = this.FetchContactPatch.bind(this);
	}

	//functions
	NameChangehanle(e) {
		this.setState({
			name: e.target.value
		});
	}
	InfoChangehanle(e) {
		this.setState({
			info: e.target.value
		});
	}
	TimeChangehanle(e) {
		this.setState({
			time: e.target.value
		});
	}
	ContentChangehanle(e) {
		this.setState({
			content: e.target.value
		});
	}

	async FetchContactPatch() {
		this.setState({ ...this.state, isFetching: true });
		await fetch('http://localhost:8000/api/v1/contact/1/', {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: this.state.input
		})
			.then((response) => response.json())
			.then((result) => this.setState({ input: JSON.stringify(result), isFetching: false }))
			.catch((e) => console.log(e));

		Router.push('/test');
	}

	render() {
		const results = this.props.props.results;
		//this.setState({ name: JSON.stringify(results[0].name).replace(/\"/gi, '') });
		return (
			<div>
				{results.map((contact) => {
					return [
						<div key={contact.id}>
							<a>{contact.name}</a>
							<a>{moment(contact.time).format('YYYY-MM-DD HH:MM')}</a>
							<a>{moment(contact.created_at).format('YYYY-MM-DD HH:MM')}</a>
						</div>
					];
				})}
				<input onChange={this.NameChangehanle} value={this.state.name} />
				<input onChange={this.InfoChangehanle} />
				<input onChange={this.TimeChangehanle} />
				<input onChange={this.ContentChangehanle} />
				<button onClick={(e) => this.FetchContactPatch()}>수정</button>
			</div>
		);
	}
}

export default ContactDetailPatchButton;
