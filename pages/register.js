import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';

import { register } from '../lib/network';

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password1: '',
			password2: ''
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange1 = this.handlePasswordChange1.bind(this);
		this.handlePasswordChange2 = this.handlePasswordChange2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePasswordChange1(e) {
		this.setState({
			password1: e.target.value
		});
	}

	handlePasswordChange2(e) {
		this.setState({
			password2: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		register(this.props.token, this.state.email, this.state.password1, this.state.password2);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
				<input
					type="password"
					placeholder="Password"
					value={this.state.password1}
					onChange={this.handlePasswordChange1}
				/>
				<input
					type="password"
					placeholder="Password"
					value={this.state.password2}
					onChange={this.handlePasswordChange2}
				/>
				<input type="submit" value="회원가입" />
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	error: state.register_error
});

const mapDispatchToProps = (dispatch) => ({
	token: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
