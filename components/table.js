import Square from './Square';
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
			<>
			<p className="TableTitle">월간식단표</p>
			<div className="TableLayout">
				{new Array(49).fill(0).map((item, i) => {
					return <Square banchan_1={item.banchan_1} key={i} />;
				})}
			</div>
			</>
		);
	}
}

export default Table;
