import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { utcDay } from "d3-time";
import { scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

class AreaChart extends React.Component {
  render() {
    const { data, type, width, ratio } = this.props;
    let xAccessor = d => {
      let formatter = timeParse("%Y-%m-%d");
      return formatter(d.date);
    };
    const xExtents = [
      xAccessor(last(data)),
      xAccessor(data[data.length - 100])
    ];
    console.log("CHARTTTPROPS",this.props);
    return (
      <div>
        <ChartCanvas
          ratio={ratio}
          width={width}
          height={400}
          margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
          seriesName="MSFT"
          data={data}
          type={type}
          xAccessor={xAccessor}
          xScale={scaleTime()}
          xExtents={xExtents}
          zoomEvent={false}
          clamp={true}
          className="react-stock-chart"
        >
          <Chart id={0} yExtents={d => [d.high, d.low]}>
            <XAxis axisAt="bottom" orient="bottom" ticks={6} />
            <YAxis axisAt="left" orient="left" ticks={10} />
            <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
          </Chart>
        </ChartCanvas>
      </div>
    );
  }
}

AreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

AreaChart.defaultProps = {
  type: "svg"
};
AreaChart = fitWidth(AreaChart);

export default AreaChart;
