import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; 
import { Link } from "react-router-dom";




class Home extends React.Component {
  constructor(props) {
    super(props);
    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize("UA-107597692-1");
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);

  }

  componentDidMount() {

  }




  render() {
    return <div className="home-wrapper">
        <div className="tile-1">
          <div className="tile-1-left">
            <h1>Who We Are</h1>
          </div>
          <div className="tile-1-right">
            <p>
              6th Cent is a community and application built by Penny Stock
              Traders, Day Traders, and Options Traders
            </p>
          </div>
        </div>

        <div className="tile-2">
          <div className="tile-2-left">
            <h1>What We Offer</h1>
          </div>
          <div className="tile-2-right">
            <p>We offer the tools to help you make successful trades</p>
            <h1> Interactive Charts </h1>

            <img src={"https://media.giphy.com/media/3o751UYt30M5BAc7Xq/giphy.gif"} />
          </div>
        </div>

        <div className="tile-3">
          <div className="tile-3-left">
            <h1>Join Us Today</h1>
          </div>
          <div className="tile-3-right">
            <p>
              Join our community today, and start getting the edge you need
              to find and execute winning trades
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Home;
