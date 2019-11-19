import './MainImage.scss'
import ContactButton from './ContactButton'

function MainImage() {
    return (
      <>
        {/* 메인페이지 이미지 */}
        <div className="MainImage">
          <div>
            <p>행복한 울타리</p>
            <p>맞춤형 케이터링을 만나보세요</p>
            <ContactButton />
          </div>
        </div>
      </>
    );
}

export default MainImage