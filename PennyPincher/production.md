# Penny Pincher

## Introduction
 Penny Pincher is a real time stock data application for use in Penny Stocks. The data is pre-filtered to provide the user with a narrow and useful scope of information in regards to trading penny stocks

## Technologies Used
  - Javascript
  - HTML
  - CSS
  - React
  - IEX API


## How are the stocks filtered?
 Every stock currently trading on the NYSE is filtered to be under five dollars in its current price. As time goes on throughout the day the volume filter adjust to represent a list of good trades. Before 7 AM PST only stocks with greater than 10K volume are shown from 8 AM PST to 9 AM PST stocks with greater than 50K volume are shown, and for the rest of the trading day only stocks with 100K volume or greater are shown. 

## Where does the information come from?
 The stock data is received from the IEX API.

## The charts
  A charting library was used to render the charts. The information comes in from the IEX API as a JSON object with three months of stock trading data.

      <ChartCanvas
        ratio={ratio}
        width={900}
        height={600}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        seriesName="MSFT"
        data={data}
        type={type}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >
        <Chart id={0} yExtents={d => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={10} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>


## Future of the Application
 The first priority is to get the percent change of the stocks to render on the home page.

 A second useful feature would be the use of the Twitter API to display what users are currently saying about the stock on twitter in order to give the users a sentiment of the public view on Twitter.
