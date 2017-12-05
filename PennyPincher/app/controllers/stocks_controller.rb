class StocksController < ApplicationController
    def index
        require 'rest-client'
        response = RestClient.get "https://api.iextrading.com/1.0/tops"
        render json: response
    end

    def show(ticker)

    end
end
