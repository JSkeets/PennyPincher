class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    if @user
        if  @user.activated
          login!(@user)
          render "/api/users/show"
        else
          render json:["Please check your email and activate your account"], status: 401 
        end
    else
      render json:["Invalid username/password"], status: 401
    end
  end

  def destroy
    if (current_user)
      logout!
      render json: {}
    else
      render json: ["Not Logged In"], status: 404
    end
  end

end


