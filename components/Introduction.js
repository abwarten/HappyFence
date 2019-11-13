import Link from 'next/link'
import './Introduction.scss'

function Introduction() {
    return (
        <>
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
        </>
    )
}

export default Introduction;
