import Link from 'next/link';
import './ContactButton.scss';

function ContactButton() {
	return (
		<Link href="/contact">
			<a className="ContactButton">문의하기</a>
		</Link>
	);
}

export default ContactButton;
