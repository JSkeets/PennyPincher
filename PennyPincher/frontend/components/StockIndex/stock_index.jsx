import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga

import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";


let order = "desc";
class StockIndex extends React.Component {
	constructor(props) {
		super(props);
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize("UA-107597692-1");
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  this.state = { yes: "no", loading: true, stockInfo: this.props.stocksInfo};
	this.addPercents = this.addPercents.bind(this);
	this.handleBtnClick = this.handleBtnClick.bind(this);
  this.colFormatter = this.colFormatter.bind(this);
  this.percentFormatter = this.percentFormatter.bind(this);
  this.floatFormatter = this.floatFormatter.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllStocks();
    let counter = 0;
    let that = this;
    let timer = setInterval(function() {
        if(jQuery.isEmptyObject(that.props.stocksInfo)){
        } else {
          that.setState({
            loading:false
          });

          clearInterval(timer);
        }
        counter++;
    },200);
  }

  addPercents() {
	  this.props.stocks.map(stock => {
      if (stock.symbol === "IEXG" ){
        stock.percentChange = 0;
        stock.float = 0;
      } else if (this.props.stocksInfo.res[stock.symbol] === undefined){
        stock.percentChange = "N/A";
        stock.float = "N/A";
      } else {
      stock.percentChange = this.props.stocksInfo.res[stock.symbol].quote.changePercent * 100;
      stock.float = this.props.stocksInfo.res[stock.symbol].stats.float;
      }
    });
  }

  colFormatter(cell,row) {
	  return <Link to={`stocks/${cell}`}>{cell}</Link>;
    }

	handleBtnClick () {
		  if (order === "desc") {
			  this.refs.table.handleSort("asc", "name");
      order = "asc";
    } else {
		this.refs.table.handleSort("desc", "name");
      order = "desc";
    }
  }

  percentFormatter(cell,row) {
    if (cell > 0) {
        return `<i id='percentPositive'>${cell.toFixed(2)}</i> `;
    } else if (cell < 0) {
      return `<i id='percentNegative'>${cell.toFixed(2)}</i> `;
    } else {
      return 0;
    }
  }

  floatFormatter(cell,row) {
      if (cell < 200) {
        return `<i id='floatLow'>${cell}</i> `;
      } else if (cell > 200 && cell < 100000) {
        return `<i id='floatMid'>${cell}</i> `;
      } else if (cell > 100000) {
        return `<i id='floatHigh'>${cell}</i> `;
      } else {
        return 0;
      }
  }

  render() {
    console.log("STOCKSINFO",this.props.stocksInfo);
    console.log("INSIDE RENDER",jQuery.isEmptyObject(this.props.stocksInfo));
	  if (this.state.loading) {
		  return <div className="loader">Loading...</div>;
    } else {
    this.addPercents();
	  return <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css" />
        <BootstrapTable ref="table" data={this.props.stocks}>
          <TableHeaderColumn dataField="symbol" isKey={true} dataSort={true} dataFormat={this.colFormatter}>
            Symbol
          </TableHeaderColumn>
          <TableHeaderColumn dataField="lastSalePrice" dataSort={true}
          filter={ {
                type: 'NumberFilter',
                delay: 300,
                numberComparators: [ '=', '>', '<=' ]
          } }>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField="volume"
            dataSort={true}
            filter={ {
              type: 'NumberFilter',
              delay: 300,
              numberComparators: [ '=', '>', '<=' ]
            } }>
            Volume
          </TableHeaderColumn>
          <TableHeaderColumn dataField="percentChange" dataSort={true}
            dataFormat={this.percentFormatter}
            filter={ {
            type: 'NumberFilter',
            delay: 300,
            numberComparators: [ '=', '>', '<=' ]
          } }
            >
            Percent Change
          </TableHeaderColumn>
          <TableHeaderColumn dataField="float" dataSort={true} dataFormat={this.floatFormatter}
          filter={ {
            type: 'NumberFilter',
            delay: 300,
            numberComparators: [ '=', '>', '<=' ]
          } }
          >
            Float
          </TableHeaderColumn>
        </BootstrapTable>
      </div>;
    }
}
}

export default StockIndex;
