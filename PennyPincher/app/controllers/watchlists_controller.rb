class WatchlistsController < ApplicationController

    def show
        @watchlist = Watchlist.find(params[:id])
        if @watchlist
        render  "/watchlists/"
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
         @watchlist = Watchlist.find(params[:id])
      if @watchlist.update_attributes(watchlist_params)
        render "/watchlists/show"
      else
        render json: @watchlist.errors.full_messages, status:422
      end
    end

    def destroy
        @watchlist = Watchlist.find(params[:id])
        @watchlist.destroy
        render json: @watchlist
    end

     def watchlist_params
        params.require(:watchlist).permit(:stock_symbol,:user_id)
     end
end
