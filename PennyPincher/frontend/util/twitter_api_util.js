var request = require("request");
var twitter_api = "https://api.twitter.com/1.1/statuses/user_timeline.json";
var bearer_token =
	"AAAAAAAAAAAAAAAAAAAAADgf2wAAAAAAi%2FgY9%2B5jezau37ibeFpO9Mfi2MI%3DhutwBYMg37ZGvYMx0VdMHOhyqB85pJ3ywLbVuPYjzr2rdrLdZH"; // the token you got in the last step

var options = {
	method: "GET",
	url: twitter_api,
	qs: {
		screen_name: "twitterapi"
	},
	json: true,
	headers: {
		Authorization: "Bearer " + bearer_token
	}
};

request(options, function(error, response, body) {
	console.dir(body);
});
