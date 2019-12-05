import AdminLeftNav from '../../components/AdminLeftNav';
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from 'next/router';

class Index extends React.Component {
	static async getInitialProps({ reduxStore, res }) {
		// if (!reduxStore.getState().isAuth) {
		// 	if (res) {
		// 		res.writeHead(302, {
		// 			Location: '/signin'
		// 		});
		// 		res.end();
		// 	} else {
		// 		Router.push('/signin');
		// 	}
		// 	return {};
		// }
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>{this.props.isAuth ? <div>login</div> : <div>not login</div>}</div>
				<Link href="/">
					<a>링크</a>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.token,
	isAuth: state.isAuth
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
