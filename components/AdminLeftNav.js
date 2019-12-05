import './AdminLeftNav.scss';
import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function AdminLeftNav() {
	return (
		<div className="left">
			<ul className="nav">
				<li>
					<FontAwesomeIcon icon={faHome} size="2x" />HOME
				</li>
				<li>회원목록</li>
				<li>123</li>
			</ul>
		</div>
	);
}

export default AdminLeftNav;
