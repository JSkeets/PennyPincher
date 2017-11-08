class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user
  def login!(user)
    session[:session_token] = user.reset_token!
  end

  def logout!
    current_user.reset_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end
  
  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def require_log_in
    unless current_user
      redirect_to :root
    end
  end
end
