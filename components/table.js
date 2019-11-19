import Square from './Square';
import DayList from './DayList';
import './Table.scss';

class Table extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			TableData: [ { banchan_1: '1', banchan_2: '2', banchan_3: '3', soup: '국' } ]
		};
	}
	render() {
		return (
			<div className="TableContainer">
				<h3 className="TableTitle">월간식단표</h3>
				<DayList />
				<div className="TableLayout">
					{new Array(35).fill(0).map((item, i) => {
						return <Square banchan_1={item.banchan_1} key={i} />;
					})}
				</div>
				<p className="TableSubTitle">시장상황에 따라 메뉴의 변동이 있을 수 있습니다</p>
			</div>
		);
	}
}

export default Table;
