import moment from 'moment';
import Link from 'next/link';

class AdminContactList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};
	}
	componentDidMount() {
		const url = `http://127.0.0.1:8000/api/v1/contact/`;

		try {
			fetch(url, {
				method: 'GET',

				headers: { 'Content-Type': 'application/json' }
			})
				.then((res) => res.json())
				.then((data) => {
					this.setState({
						contacts: data.results
					});
				})
				.catch(console.log);
		} catch (error) {
			console.error('You have an error in your code or there are Network issues.', error);
		}
	}

	render() {
		return (
			<div>
				{this.state.contacts.map((contact) => {
					return [
						<div key={contact.id}>
							<Link href={`/admin/contact/${contact.id}`}>
								<a>{contact.name}</a>
							</Link>
							<Link href={`/admin/contact/${contact.id}`}>
								<a>{moment(contact.time).format('YYYY-MM-DD HH:MM')}</a>
							</Link>
							<Link href={`/admin/contact/${contact.id}`}>
								<a>{moment(contact.created_at).format('YYYY-MM-DD HH:MM')}</a>
							</Link>
						</div>
					];
				})}
			</div>
		);
	}
}

export default AdminContactList;
