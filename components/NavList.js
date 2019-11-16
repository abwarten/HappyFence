import Link from 'next/link';

import './NavList.scss';

class NavList extends React.Component {
	render() {
		return (
			<div className="Nav">
				<Link href="/">
					<a className="Logo">
						<img src="/static/fence.png" alt="image" />
					</a>
				</Link>
				<Link href="/">
					<a className="NavList">Home</a>
				</Link>
				<Link href="/table">
					<a className="NavList">월간식단표</a>
				</Link>
				<Link href="/today">
					<a className="NavList">오늘의반찬</a>
				</Link>
				<Link href="/contact">
					<a className="NavList">문의하기</a>
				</Link>
			</div>
		);
	}
}

export default NavList;
