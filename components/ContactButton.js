import Link from 'next/link';
import './ContactButton.scss';

function ContactButton() {
	return (
		<div className="ContactButtonLayout">
			<Link href="/contact">
				<a className="ContactButton">문의하기</a>
			</Link>
		</div>
	);
}

export default ContactButton;
