import React from 'react';
import './ContactInfo.scss';

class ContactInfo extends React.Component {
	static defaultProps = {
		info: {
			name: '이름',
			info: '010-0000-0000',
			time: '0000-00-00',
			content: '',
			id: 0
		}
	};

	state = {
		editing: false,
		name: '',
		info: '',
		time: '',
		content: ''
	};

	// editing 값을 반전시키는 함수입니다
	// true -> false, false -> true
	handleToggleEdit = () => {
		const { editing } = this.state;
		this.setState({ editing: !editing });
	};

	// input 에서 onChange 이벤트가 발생 될 때
	// 호출되는 함수입니다
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { info, onUpdate } = this.props;
		if (!prevState.editing && this.state.editing) {
			this.setState({
				name: info.name,
				info: info.info,
				time: info.time,
				content: info.content
			});
		}

		if (prevState.editing && !this.state.editing) {
			onUpdate(info.id, {
				name: this.state.name,
				info: this.state.info,
				time: this.state.time,
				content: this.state.content
			});
		}
	}

	render() {
		const { editing } = this.state;

		if (editing) {
			// 수정모드
			return (
				<div className="ContactContainer">
					<div>
						<input value={this.state.name} name="name" placeholder="이름" onChange={this.handleChange} />
					</div>
					<div>
						<input value={this.state.info} name="info" placeholder="전화번호" onChange={this.handleChange} />
					</div>
					<div>
						<input
							type="date"
							value={this.state.time}
							name="time"
							placeholder="시간"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
							value={this.state.content}
							name="content"
							placeholder="내용"
							onChange={this.handleChange}
						/>
					</div>
					<button onClick={this.handleToggleEdit}>적용</button>
				</div>
			);
		}

		// 일반모드
		const { name, info, time, content } = this.props.info;

		return (
			<div className="ContactContainer">
				<div>
					<b>{name}</b>
				</div>
				<div>{info}</div>
				<div>{time}</div>
				<div>{content}</div>
				<button onClick={this.handleToggleEdit}>수정</button>
			</div>
		);
	}
}

export default ContactInfo;
