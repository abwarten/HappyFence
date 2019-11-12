import Link from 'next/link'
import './MainPage.scss'

function MainImage() {
    return (
        <>
            {/* 메인페이지 이미지 */}
            <div className="MainPage">
                <div>
                    <p>행복한 울타리</p>
                    <p>맞춤형 케이터링을 만나보세요</p>
                </div>
                <div className="ContactButtonLayout">
                    <Link href="/contact">
                        <a className="ContactButton">문의하기</a>
                    </Link>
                </div>
            </div>

            <div className="introduction">
                <div className="Leftinner">
                    <div>
                        <p>오늘의 반찬을</p>
                        <p>확인 해보세요</p>
                        <Link href="/today">
                            <a>확인하기</a>
                        </Link>
                    </div>
                    
                </div>
                <div className="Rightinner">
                    <div>
                        <p>이달의 식단표를</p>
                        <p>확인 해보세요</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="Footer">
                <div>
                    <p> 약관 /</p>
                    <p> 개인정보취급방침 /</p>
                    <p> 이메일무단수집거부 </p>
                </div>
                <div>
                    <p> XX단 /</p>
                    <p> 대표이사:박경열 /</p>
                    <p> 소재지:서울특별시 영등포구 대림2동 1056-8 3층 /</p>
                    <p> 사업자등록번호: 123-123-1231 /</p>
                    <p> 전화번호: 010-2361-7348 </p>
                </div>
            </div>
        </>
    )
}

export default MainImage