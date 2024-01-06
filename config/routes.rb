Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update]
    resources :friendrequests
    resources :posts
    resources :comments
    resources :postlikes, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
