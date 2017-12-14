class WatchlistsController < ApplicationController

    def show
        @watchlist = Watchlist.find_by_user_id(params[:id])
        if @watchlist
        render  json: @watchlist
        else
        render json: ["watchlist isn't created yet"], status: 422
        end
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)
        if @watchlist.save
            render  "/watchlists/show"
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    def update
         keys = params[:ticker][:stocks].keys
         @watchlist = Watchlist.find(params[:id])
         stock_symbols = keys.push(params[:ticker][:ticker])
         watchlist_attributes = { stock_symbols: stock_symbols}
      if @watchlist.update_attributes(watchlist_attributes)
        render json: @watchlist
      else
        render json: @watchlist.errors.full_messages, status:422
      end
    end

    def destroy
        @watchlist = Watchlist.find(params[:id])
        @watchlist.stock_symbols.delete(params[:ticker][:symbol])
        @watchlist.save
        render json: @watchlist
    end

     def watchlist_params
        params.require(:watchlist).permit(:stock_symbol,:user_id)
     end
end
