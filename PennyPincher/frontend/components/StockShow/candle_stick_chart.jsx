import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { utcDay } from "d3-time";
import { scaleTime } from "d3-scale";
import { timeParse } from "d3-time-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries,BarSeries } from "react-stockcharts/lib/series";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import { EdgeIndicator } from "react-stockcharts/lib/coordinates";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { HoverTooltip } from "react-stockcharts/lib/tooltip";
import { ema } from "react-stockcharts/lib/indicator";

const dateFormat = timeFormat("%Y-%m-%d");
const numberFormat = format(".2f");

function tooltipContent(ys) {
  return ({ currentItem, xAccessor }) => {
    return {
      x: dateFormat(xAccessor(currentItem)),
      y: [
        {
          label: "open",
          value: currentItem.open && numberFormat(currentItem.open)
        },
        {
          label: "high",
          value: currentItem.high && numberFormat(currentItem.high)
        },
        {
          label: "low",
          value: currentItem.low && numberFormat(currentItem.low)
        },
        {
          label: "close",
          value: currentItem.close && numberFormat(currentItem.close)
        }
      ]
        .concat(
          ys.map(each => ({
            label: each.label,
            value: each.value(currentItem),
            stroke: each.stroke
          }))
        )
        .filter(line => line.value)
    };
  };
}

class AreaChart extends React.Component {
  render() {
    const { data, type, width, ratio } = this.props;
    let xAccessor = d => {
      let formatter = timeParse("%Y-%m-%d");
      return formatter(d.date);
    };

    const xExtents = [
      xAccessor(last(data)),
      xAccessor(data[data.length - (data.length - 1)])
    ];
    return <div>
        <ChartCanvas ratio={ratio} width={width} height={400} margin={{ left: 50, right: 50, top: 10, bottom: 30 }} seriesName="MSFT" data={data} type={type} xAccessor={xAccessor} xScale={scaleTime()} xExtents={xExtents} zoomEvent={true} clamp={true} className="react-stock-chart">
          <Chart id={1} yExtents={d => [d.high, d.low]}>
            <XAxis axisAt="bottom" orient="bottom" ticks={6} />
            <YAxis axisAt="right" orient="right" ticks={5} />
            <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />

            <HoverTooltip tooltipContent={tooltipContent(
                [
                ]
              )} fontSize={15} />
          </Chart>
          	<Chart
					id={2}
					yExtents={[d => d.volume]}
					height={150}
					origin={(w, h) => [0, h - 150]}
				>
					<YAxis
						axisAt="left"
						orient="left"
						ticks={5}
						tickFormat={format(".2s")}
					/>

					<BarSeries
						yAccessor={d => d.volume}
						fill={d => (d.close > d.open ? "#6BA583" : "#FF0000")}
					/>
				</Chart>
        </ChartCanvas>
      </div>;
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
