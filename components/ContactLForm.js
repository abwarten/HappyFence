class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			info: '',
			time: '',
			content: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleInfoChange = this.handleInfoChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		});
	}

	handleInfoChange(e) {
		this.setState({
			info: e.target.value
		});
	}

	handleTimeChange(e) {
		this.setState({
			time: e.target.value
		});
	}

	handleContentChange(e) {
		this.setState({
			content: e.target.value
		});
	}

	async handleSubmit(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);

		const url = `http://127.0.0.1:8000/api/v1/contact/`;
		console.log(JSON.stringify(this.state));
		try {
			const response = await fetch(url, {
				method: 'POST',

				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(this.state)
			});
		} catch (error) {
			console.error('You have an error in your code or there are Network issues.', error);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>이름</label>
				<input type="text" name="name" onChange={this.handleNameChange} />
				<label>연락처</label>
				<input type="text" name="info" onChange={this.handleInfoChange} />
				<label>연락 가능한 시간</label>
				<input type="text" name="time" onChange={this.handleTimeChange} />
				<label>문의내용</label>
				<input type="text" name="content" onChange={this.handleContentChange} />
				<button>문의하기</button>
			</form>
		);
	}
}

export default ContactForm;
