# Penny Pincher

## Description
  Penny pincher is a stock data visualization tool, focused for use in penny stocks.

  Penny pincher will provide users with real-time stock data and information about a specific security. The information presented for each security will be.
  * Price
  * Volume
  * Number of recent news articles
  * Float
  * Percentage gain for the day
  * Exchanged which it is traded on
  * Charts with various timelines

## Functionality & MVP
 Penny Pincher will present the user with stocks pre-filtered by set guidelines which will be generate a list of viable candidates for purchase in the penny stock category.
 * Users can select a stock from a list of pre-filtered stocks
 * Pre-filtered stocks will contain some relevant information such as price, and volume
 * Detailed view of stock will be available to the user with more information, and charts.

 ## Wireframes
 
 ![alt](https://github.com/JSkeets/PennyPincher/blob/master/HomeIndex.png)
 ![alt](https://github.com/JSkeets/PennyPincher/blob/master/Show_Page.png)


 ## Implementation Schedule
 * Weekend
    * Complete ReadMe
    * Familiarize with IEX API
 * **Day 1**:  Setup all necessary Node modules, including getting webpack up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 4 scripts outlined above. Learn the basics of IEX API. Goals for the day:
    * Get webpack serving files and frame out index.html
    * Be able to gather data from IEX API
    * Hosting on heroku
 * **Day 2**: Familiarize with D3 Data Library
    * Be able to have an index page with stock tickers, and some relevant information.
* **Day 3**: Clean up the data, and create a show page for an individual stock.  
 **Day 4**: Ensure the website has a clean presentation, and is user friendly.

## Technologies
 * Javascript for data filtering
 * D3 for DOM manipulation, and data rendering
 * IEX API for data gathering
 * Webpack to bundle various scripts.
 
 ## Bonus Features
  * A twitter sentiment for a specific stock ticker symbol, to get an idea of how others feel about the direction of the stock.
