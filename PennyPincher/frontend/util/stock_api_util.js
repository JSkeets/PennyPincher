// const socket = require("socket.io-client")(
// 	"https://ws-api.iextrading.com/1.0/tops"
// );
//
// // websocket
// export const fetchAllStocks = () => {
// 	// Listen to the channel's messages
// 	socket.on("message", message => {
// 		console.log($.parseJSON(message));
// 	});
//
// 	// Connect to the channel
// 	socket.on("connect", () => {
// 		// Subscribe to topics (i.e. appl,fb,aig+)
// 		socket.emit("subscribe", "fb");
// 	});
// };

export const fetchAllStocks = () => {
	return $.ajax({
		method: "GET",
		url: "/stocks"
	});
};
export const fetchStock = symbol => {
	return $.ajax({
		method: "GET",
		url: `/stocks/${symbol}`
	});
};
