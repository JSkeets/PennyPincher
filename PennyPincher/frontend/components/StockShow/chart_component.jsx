import React from "react";
import { render } from "react-dom";
import Chart from "./candle_stick_chart";

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
      console.log("CHARTPROPS",this.props);
    return (
      <TypeChooser>
        {type => (
          <div>
            <Chart
              type={type}
              data={this.props.stocks[this.props.symbol].chart}
              ratio={6}
            />
          </div>
        )}
      </TypeChooser>
    );
  }
}

export default ChartComponent;
