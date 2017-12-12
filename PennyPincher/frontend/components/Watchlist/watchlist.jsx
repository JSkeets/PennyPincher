import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga

import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

let order = "desc";
class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize("UA-107597692-1");
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
    this.state = { yes: "no", loading: true, stocks: [] };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.colFormatter = this.colFormatter.bind(this);
    this.percentFormatter = this.percentFormatter.bind(this);
    this.floatFormatter = this.floatFormatter.bind(this);
    this.createCustomDeleteButton = this.createCustomDeleteButton.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 5000);
  }

  colFormatter(cell, row) {
    return <Link to={`stocks/${cell}`}>{cell}</Link>;
  }

  handleBtnClick() {
    if (order === "desc") {
      this.refs.table.handleSort("asc", "name");
      order = "asc";
    } else {
      this.refs.table.handleSort("desc", "name");
      order = "desc";
    }
  }

  percentFormatter(cell, row) {
    if (cell > 0) {
      return `<i id='percentPositive'>${cell.toFixed(2)}</i> `;
    } else if (cell < 0) {
      return `<i id='percentNegative'>${cell.toFixed(2)}</i> `;
    } else {
      return 0;
    }
    // return cell;
  }

  floatFormatter(cell, row) {
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
  createCustomDeleteButton  (onClick)  {
    return (
      <button style={{ color: "red" }} onClick={console.log("I CLICKED THE BUTTON")}>
        Delete rows
      </button>
    );
  }
  options() {
  deleteBtn: this.createCustomDeleteButton;
}


  render() {
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    } else {
      const cellEditProp = { mode: "click" };
      const selectRow = { mode: "checkbox", cliclToSelct: true };
      let parsed = Object.values(this.props.stocks);
      let realParsed = [];
      parsed.forEach(stock => {
        let newObj = {
          symbol: stock.quote.symbol,
          changePercent: stock.quote.changePercent,
          float: stock.stats.float,
          price: stock.quote.latestPrice,
          volume: stock.quote.latestVolume
        };
        realParsed.push(newObj);
        newObj = {};
      });
      console.log(realParsed);
      return (
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
          />
          <BootstrapTable
            ref="table"
            data={realParsed}
            selectRow={selectRow}
            remote={this.remote}
            deleteRow
            search
            pagination
            cellEdit={cellEditProp}
            options={
              this.options()
            }
          >
            <TableHeaderColumn
              dataField="symbol"
              isKey={true}
              dataSort={true}
              dataFormat={this.colFormatter}
            >
              Symbol
            </TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataSort={true}>
              Price
            </TableHeaderColumn>
            <TableHeaderColumn dataField="volume" dataSort={true}>
              Volume
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="changePercent"
              dataSort={true}
              dataFormat={this.percentFormatter}
            >
              Percent Change
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="float"
              dataSort={true}
              dataFormat={this.floatFormatter}
            >
              Float
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
}


export default Watchlist;
