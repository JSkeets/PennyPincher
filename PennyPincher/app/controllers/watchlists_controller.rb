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
         @watchlist = Watchlist.find_by_user_id(params[:ticker][:userId])
        if @watchlist
            @watchlist.stock_symbols.push(params[:ticker][:ticker])
             if @watchlist.save
                render json: @watchlist
             else
                render json: @watchlist.errors.full_messages, status:422
             end
        else
            stock = params[:ticker][:ticker]
            user = params[:ticker][:userId].to_i
            @watchlist = Watchlist.new(stock_symbols:["#{stock}"],user_id:user)
                if @watchlist.save!
                    render json: @watchlist
                else
                    render json: @watchlist.errors.full_messages, status: 422
                end
        end
    end

    def destroy
        @watchlist = Watchlist.find_by_user_id(params[:ticker][:id])
        @watchlist.stock_symbols.delete(params[:ticker][:symbol])
        @watchlist.save
        render json: @watchlist
    end

     def watchlist_params
        params.require(:watchlist).permit(:stock_symbol,:user_id)
     end
end
