class StocksController < ApplicationController
    def index
        require 'rest-client'
         stocks = Rails.cache.fetch(:stocks) do
            response = RestClient.get "https://api.iextrading.com/1.0/tops"
         render json: response
        end
    end

    def show(ticker)

    end
end
