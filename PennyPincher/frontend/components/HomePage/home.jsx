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
              6th Cent is a community built by Penny Stock Traders, Day
              Traders, and Options Traders to make trading easier and more
              successful from beginner to expert
            </p>
          </div>
        </div>
        <div className="tile-2">
          <div className="tile-2-left">
            <h1>The information you need to make successful trades!</h1>
          </div>
          <div className="tile-2-right">
            <div className="tile-2-1">
              <h1> Interactive Charts </h1>
              <img src={"https://media.giphy.com/media/l0HUlO4Mn3DbbKff2/giphy.gif"} width="925px" />
            </div>
            <div className="tile-2-2">
              <h1>Live Twitter Feed </h1>
              <img src={"https://s3.amazonaws.com/6thcenttwittershot/Screen+Shot+2018-01-09+at+2.46.43+PM.png"} width="925px" />
            </div>
            <div className="tile-2-3">
              <h1> Custom Watchlist </h1>
              <img src={"https://s3.amazonaws.com/6thcenttwittershot/Screen+Shot+2018-01-09+at+2.54.12+PM.png"} width="925px" />
            </div>
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
            <div className="signup-button-wrapper">
              <Link className="signup-button-home" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Home;
