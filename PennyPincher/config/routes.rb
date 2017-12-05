Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create,:index,:show]
    resource :session, only: [:create,:destroy]
    
  end
  resources :stocks, only: [:index,:show]
  resources :password_resets,     only: [:new, :create, :edit, :update]

namespace :api  do
resources :users do
    member do
      get :confirm_email
    end
  end
end
end
