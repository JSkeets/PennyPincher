// let request = require("request");
// let twitter_api = "https://api.twitter.com/1.1/search/tweets.json?q=%23";

// let bearer_token =
// 	"AAAAAAAAAAAAAAAAAAAAADgf2wAAAAAAi%2FgY9%2B5jezau37ibeFpO9Mfi2MI%3DhutwBYMg37ZGvYMx0VdMHOhyqB85pJ3ywLbVuPYjzr2rdrLdZH"; // the token you got in the last step


export const fetchTweets = symbol => {
  return $.ajax({
    method: "GET",
    url: `/tweets/${symbol}`
  });
};
