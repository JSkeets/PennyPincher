class PasswordResetsController < ApplicationController

  before_action :get_user, only: [:edit, :update]


  def new
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = "Email sent with password reset instructions"
      redirect_to root_url
    else
      flash.now[:danger] = "Email address not found"
      render 'new'
    end
  end

  def edit
  end

  def update
    if params[:user][:password].empty?                  # Case (3)
      flash[:info] = "Password can not be empty"
    elsif @user.update_attributes(user_params)          # Case (4)

      login! @user
      flash[:success] = "Password has been reset."
      redirect_to "/"
    else
      render 'edit'                                     # Case (2)
    end
  end


  private

   def user_params
      params.require(:user).permit(:password, :password_confirmation)
    end

    def get_user
      @user = User.find_by(email: params[:user][:email])

    end

    # Confirms a valid user.
    def valid_user
      unless (@user && @user.activated? &&
              @user.authenticated?(:reset, params[:user][:id]))
        redirect_to root_url
      end
    end
end
