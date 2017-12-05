class StocksController < ApplicationController
    require 'rest-client'
    def index
        
         stocks = Rails.cache.fetch(:stocks,expires_in: 10.seconds) do
            response = RestClient.get "https://api.iextrading.com/1.0/tops"
         render json: response
        end
    end

    def show
        stock_show = Rails.cache.fetch(:stock_show, expires_in: 5.seconds) do
            response = RestClient.get "https://api.iextrading.com/1.0/stock/#{params[:id]}/batch?types=quote,stats,news,peers,chart&range=6m&last=50"
            render json: response
        end
    end
end
