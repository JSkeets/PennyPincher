import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga
import StockIndexItem from "./stock_index_item";
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
    this.state = { yes: "no", loading: true };
	this.addPercents = this.addPercents.bind(this);
	this.handleBtnClick = this.handleBtnClick.bind(this);
  this.colFormatter = this.colFormatter.bind(this);
  this.percentFormatter = this.percentFormatter.bind(this);
  }
  componentDidMount() {
	  console.log(this.props);
    this.props.fetchAllStocks();
    setTimeout(() => this.setState({ loading: false }), 10000);
  }
  
  addPercents() {
	  this.props.stocks.map(stock => {
		  stock.percentChange = this.props.stocksInfo[stock.symbol];
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
    console.log("PERCENT Cell",cell);
    if (cell > 0) {
        return `<i id='percentPositive'>${cell.toFixed(2)}</i> `;
    } else if (cell < 0) {
      return `<i id='percentNegative'>${cell.toFixed(2)}</i> `;
    } else {
      return 0;
    }
    // return cell;
  }

  render() {
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
          <TableHeaderColumn dataField="lastSalePrice" dataSort={true}>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField="volume" dataSort={true}>
            Volume
          </TableHeaderColumn>
          <TableHeaderColumn dataField="percentChange"  dataSort={true} dataFormat={this.percentFormatter}>
            Percent Change
          </TableHeaderColumn>
        </BootstrapTable>
      </div>;
    }
}
}

export default StockIndex;

//   return (
//     <ul id="stock-index">
//       <li className="review-index-item-header">
//         <i id="header-symbol">Symbol</i>
//         <i id="header-symbol"> Price</i>
//         <i id="header-symbol"> Volume</i>
//         <i id="header-symbol"> Sector </i>
//         {<i id="header-symbol"> Percent Change</i>}
//       </li>
//       {this.props.stocks.map(stock => (
//         <StockIndexItem
//           key={stock.id}
//           stock={stock}
//           percents={this.props.stocksInfo}
//         />
//       ))}
//     </ul>
//   );