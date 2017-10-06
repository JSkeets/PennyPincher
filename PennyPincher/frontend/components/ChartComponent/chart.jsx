import React from "react";
import { render } from "react-dom";
import Chart from "./candle_stick_chart";

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchStock(this.props.symbol);
	}
	render() {
		if (this.props.stocks[this.props.symbol] == null) {
			return <div>Loading...</div>;
		}
		return (
			<TypeChooser>
				{type => (
					<div>
						<Chart
							type={type}
							data={this.props.stocks[this.props.symbol].chart}
							width={200}
							ratio={2}
						/>
					</div>
				)}
			</TypeChooser>
		);
	}
}

export default ChartComponent;
