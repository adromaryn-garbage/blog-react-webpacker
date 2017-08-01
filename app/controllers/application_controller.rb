class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :profile

  def profile
    @user = ->(user) { return {
        name: user.name,
        preview: user.preview,
        telegram: user.telegram,
        email: user.email
    }} .call(User.all[0]).to_json
  end

  def authorized
    @authorized ||= !!(User.find(session[:user_id]) if session[:user_id])
  end

  def authorize
    redirect_to '/' unless authorized
  end

end
