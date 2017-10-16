/*** create-twitter-bearer-token.js ***/
var request = require("request");
var consumer_key = "GCKZK7kK1Gnev31m7heNbudLl";
var consumer_secret = "J0Y82Y4j3sNZw7EHSTFSwnL8p8GwvXp9urM14JhvgitzeDeqiU";
var encode_secret = new Buffer(consumer_key + ":" + consumer_secret).toString(
	"base64"
);

var options = {
	url: "https://api.twitter.com/oauth2/token",
	headers: {
		Authorization: "Basic " + encode_secret,
		"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
	},
	body: "grant_type=client_credentials"
};

request.post(options, function(error, response, body) {
	console.log(body); // <<<< This is your BEARER TOKEN !!!
});
