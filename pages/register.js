import React from 'react';
import { connect } from 'react-redux';
// import auth from '../state/auth';
import Router from 'next/router';

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		// this.props.register(this.state.username, this.state.password);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="username"
					placeholder="Username"
					value={this.state.username}
					onChange={this.handleUsernameChange}
				/>
				<input
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>
				<input type="submit" value="회원가입" />
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	let errors = [];
	if (state.auth.errors) {
		errors = Object.keys(state.auth.errors).map((field) => {
			return { field, message: state.auth.errors[field] };
		});
	}
	return {
		errors,
		isAuthenticated: state.auth.isAuthenticated
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (username, password) => dispatch(auth.register(username, password))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
