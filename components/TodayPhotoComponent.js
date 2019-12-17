import './TodayPhotoComponent.scss';

const TodayPhoto = () => (
	<div className="flex-container">
		<div className="container">
			<div className="gallery">
				<div className="gallery-item" tabIndex="0">
					<img src="static/ex1.jpg" className="gallery-image" alt="" />
				</div>
				<div className="gallery-item" tabIndex="0">
					<img src="static/ex2.jpg" className="gallery-image" alt="" />
				</div>
				<div className="gallery-item" tabIndex="0">
					<img src="static/ex3.jpg" className="gallery-image" alt="" />
				</div>
			</div>
		</div>
	</div>
);

export default TodayPhoto;
