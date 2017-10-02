const socket = require("socket.io-client")(
	"https://ws-api.iextrading.com/1.0/tops"
);

export const fetchAllStocks = () => {
	// Listen to the channel's messages
	socket.on("message", message => {
		console.log(message);
	});

	// Connect to the channel
	socket.on("connect", () => {
		// Subscribe to topics (i.e. appl,fb,aig+)
		socket.emit("subscribe", "snap,fb,aig+");
	});
};
