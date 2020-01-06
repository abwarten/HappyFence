import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

class AlertTest extends React.Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.title.style.color = '#00a82d';
		this.title.style.textAlign = 'center';
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	render() {
		return (
			<div>
				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<h2 ref={(title) => (this.title = title)}>문의 주셔서 감사합니다</h2>
					<h3>최대한 빠른 시간안에 연락드리겠습니다.</h3>
				</Modal>
			</div>
		);
	}
}

export default AlertTest;
