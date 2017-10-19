let request = require("request");
let twitter_api = "https://api.twitter.com/1.1/search/tweets.json?q=%23";

let bearer_token =
	"AAAAAAAAAAAAAAAAAAAAADgf2wAAAAAAi%2FgY9%2B5jezau37ibeFpO9Mfi2MI%3DhutwBYMg37ZGvYMx0VdMHOhyqB85pJ3ywLbVuPYjzr2rdrLdZH"; // the token you got in the last step

const fetchTwitter = hash => {
	let options = {
		method: "GET",
		url: twitter_api + hash,
		json: true,
		headers: {
			Authorization: "Bearer " + bearer_token
		}
	};

	request(options, function(error, response, body) {
		console.log(body);
	});
};

module.exports = fetchTwitter;

fetchTwitter("X");
