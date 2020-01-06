class ContactForm extends React.Component {
	state = {
		name: '',
		info: '',
		time: '',
		content: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.onCreate(this.state);

		this.setState({
			name: '',
			info: '',
			time: '',
			content: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="이름" value={this.state.name} onChange={this.handleChange} name="name" />
				<input placeholder="전화번호" value={this.state.info} onChange={this.handleChange} name="info" />
				<input
					placeholder="시간) 2020-01-06 11:11"
					value={this.state.time}
					onChange={this.handleChange}
					name="time"
				/>
				<input placeholder="내용" value={this.state.content} onChange={this.handleChange} name="content" />
				<button type="submit">등록</button>
			</form>
		);
	}
}

export default ContactForm;
