import React from 'react';
import axios from 'axios';

class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			file: ''
		};

		this.handleImageInput = this.handleImageInput.bind(this);
		this.handleImageSubmit = this.handleImageSubmit.bind(this);
	}

	handleImageInput(e) {
		this.setState({
			file: e.target.files[0]
		});
	}

	handleImageSubmit(e) {
		const formData = new FormData();
		formData.append('file', this.state.file);

		// return axios
		// 	.post('/upload/image', formData)
		// 	.then((res) => {
		// 		console.log('성공');
		// 	})
		// 	.catch((err) => {
		// 		console.log('실패');
		// 	});
	}

	render() {
		return (
			<form onSubmit={this.handleImageSubmit}>
				<input type="file" name="file" onChange={this.handleImageInput} />
				<button type="submit">업로드</button>
			</form>
		);
	}
}

export default Index;
