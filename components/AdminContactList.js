import moment from 'moment';
import Link from 'next/link';

class AdminContactList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const results = this.props.props.results;
		return (
			<div>
				{results.map((contact) => {
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
