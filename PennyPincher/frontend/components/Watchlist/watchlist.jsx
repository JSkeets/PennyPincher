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
    this.state = {
      yes: "no",
      loading: true,
      stocks: this.props.stocks,
      ticker: "",
      delete:"",
      user: this.props.user,
      id: this.props.watchlistId
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.colFormatter = this.colFormatter.bind(this);
    this.percentFormatter = this.percentFormatter.bind(this);
    this.floatFormatter = this.floatFormatter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.cellButton = this.cellButton.bind(this);

  }

  componentDidMount() {
    this.props.fetchAllStocks();
    setTimeout(() => this.setState({ loading: false }), 3000);
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

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }



  handleSubmit(e) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.stocks = Object.keys(stateCopy.stocks);
    this.setState(stateCopy);
    this.setState({ stocks: Object.keys(this.props.stocks) });
    e.preventDefault();
    const ticker = this.state;
    this.props.processForm(ticker);
    window.location.reload();
  }

  onClickProductSelected(cell, row) {
    console.log("Product #", row.symbol);
    console.log(this.state);
  }

  cellButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        onClick={() => this.onClickProductSelected(cell, row, rowIndex)}
      >
        Delete
      </button>
    );
  }

  render() {
    const options = { deleteBtn: this.createCustomDeleteButton };
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    } else {
      const cellEditProp = {
        mode: "click"
      };
      const selectRow = {
        mode: "checkbox",
        cliclToSelct: true
      };
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
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="new watchlist item"
              value={this.state.ticker}
              onChange={this.update("ticker")}
            />
            <input type="submit" />
          </form>
          <BootstrapTable
            ref="table"
            data={realParsed}
            options={options}
            selectRow={selectRow}
            remote={this.remote}
            deleteRow
            search
            pagination
            options={{ onDeleteRow: this.props.onDeleteRow }}
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
            <TableHeaderColumn dataField="button" dataFormat={this.cellButton.bind(this)}>
              Delete
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
}


export default Watchlist;
