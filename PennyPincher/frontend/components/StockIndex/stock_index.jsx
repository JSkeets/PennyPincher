import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga
import StockIndexItem from "./stock_index_item";
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
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStocks();
    setTimeout(() => this.setState({ loading: false }), 10000);
  }

  componentDidReceiveProps(newProps) {
    console.log("WILL RECEIVE", newProps.stocksInfo);
  }

  addPercents() {
    this.props.stocks.map(stock => {
      stock.percentChange = this.props.stocksInfo[stock.symbol];
    });
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

  render() {
    if (this.state.loading) {
      // if (!this.props) {

      return <div className="loader">Loading...</div>;
    } else {
      this.addPercents();
	  return <div>
        <BootstrapTable id="stock-index" ref="table" data={this.props.stocks}>
          <TableHeaderColumn  id="header-symbol" dataField="symbol" isKey={true} dataSort={true}>
            Symbol
          </TableHeaderColumn>
          <TableHeaderColumn id="header-symbol" dataField="lastSalePrice" dataSort={true}>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn id="header-symbol" dataField="volume" dataSort={true}>
			Volume
          </TableHeaderColumn>
          <TableHeaderColumn id="header-symbol" dataField="percentChange" dataSort={true}>
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