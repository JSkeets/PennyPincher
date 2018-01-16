Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create index show]
    resource :session, only: %i[create destroy]
  end
  resources :comments, only:%i[show create index]
  resources :watchlists, only: %i[show create destroy edit update]
  resources :stocks, only: %i[index show]
  resources :tweets, only: [:show]
  resources :password_resets, only: %i[new create edit update]
  resources :reviews, only: %i[create index show]
  namespace :api do
    resources :users do
      member do
        get :confirm_email
      end
    end
  end
end
