import React from 'react';
import { connect } from 'react-redux';
import { login } from '../lib/network';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);

		login(this.props.token, this.state.email, this.state.password);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
				<input
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>
				<input type="submit" value="로그인" />
			</form>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
	token: dispatch,
	isAuth: true
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
