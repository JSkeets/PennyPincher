class TweetsController < ApplicationController
require 'rest-client'

    def show
        searchkey = "$#{params[:id]}"
        response = RestClient.get("https://api.twitter.com/1.1/search/tweets.json?q=%23#{searchkey}" , {Authorization:"Bearer "+"AAAAAAAAAAAAAAAAAAAAADgf2wAAAAAAi%2FgY9%2B5jezau37ibeFpO9Mfi2MI%3DhutwBYMg37ZGvYMx0VdMHOhyqB85pJ3ywLbVuPYjzr2rdrLdZH"})
        render json: response
    end
end


