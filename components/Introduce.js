import Link from 'next/link';
import './Introduce.scss';

function Introduction() {
	return (
		<div className="IntroContainer">
			<div className="Introduce">
				<div className="Leftinner">
					<p>오늘의 반찬을</p>
					<p>확인 해보세요</p>
				</div>
				<Link href="/today">
					<a>확인하기</a>
				</Link>
				<div className="Rightinner">
					<p>맞춤형 케이터링을</p>
					<p>만나보세요</p>
				</div>
				<Link href="/contact">
					<a>주문하기</a>
				</Link>
			</div>
		</div>
	);
}

export default Introduction;
