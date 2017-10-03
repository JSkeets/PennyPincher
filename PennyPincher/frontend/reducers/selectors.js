let d3 = require("d3");
let sampleData = [
	{
		symbol: "SNAP",
		marketPercent: 0.00901,
		bidSize: 200,
		bidPrice: 110.94,
		askSize: 100,
		askPrice: 111.82,
		volume: 177265,
		lastSalePrice: 111.76,
		lastSaleSize: 5,
		lastSaleTime: 1480446905681,
		lastUpdated: 1480446910557
	},
	{
		symbol: "FB",
		marketPercent: 0.01465,
		bidSize: 200,
		bidPrice: 120.8,
		askSize: 100,
		askPrice: 122.5,
		volume: 205208,
		lastSalePrice: 121.41,
		lastSaleSize: 100,
		lastSaleTime: 1480446908666,
		lastUpdated: 1480446923942
	},
	{
		symbol: "AIG+",
		marketPercent: 0.04618,
		bidSize: 0,
		bidPrice: 0,
		askSize: 0,
		askPrice: 0,
		volume: 3400,
		lastSalePrice: 21.52,
		lastSaleSize: 100,
		lastSaleTime: 1480446206461,
		lastUpdated: -1
	}
];
d3.json("sampleData", function(error, data) {
	function tabulate(data, columns) {
		var table = d3.select("body").append("table");
		var thead = table.append("thead");
		var tbody = table.append("tbody");

		// append the header row
		thead
			.append("tr")
			.selectAll("th")
			.data(columns)
			.enter()
			.append("th")
			.text(function(column) {
				return column;
			});

		// create a row for each object in the data
		var rows = tbody
			.selectAll("tr")
			.data(data)
			.enter()
			.append("tr");

		// create a cell in each row for each column
		var cells = rows
			.selectAll("td")
			.data(function(row) {
				return columns.map(function(column) {
					return { column: column, value: row[column] };
				});
			})
			.enter()
			.append("td")
			.text(function(d) {
				return d.value;
			});

		return table;
	}

	// render the table(s)
	tabulate(data, ["date", "close"]); // 2 column table
});
