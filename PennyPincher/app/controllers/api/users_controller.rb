class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.account_activation(@user).deliver_now
      redirect_to "/"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: ["INVALID"], status: 422
    end
  end

  def confirm_email
    @user = User.find_by_activation_digest(params[:id])
    if @user
      @user.email_activate
      flash[:success] = "Welcome to the Sample App! Your email has been confirmed.
      Please sign in to continue."
      redirect_to "/#/login"
    else
      flash[:error] = "Sorry. User does not exist"
      redirect_to "/"
    end
  end

  def index
    @users = User.all
    render "api/users/index"
  end

  def user_params
    params.require(:user).permit(:id,:username, :password, :email, :fname, :lname, :phone_number, :activation_digest)
  end
end
