Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :songs
  resources :genres, only: [:index, :show, :destroy, :create]
  resources :users, only: [:index, :destroy]
  
  post "/signup", to:"users#create"
  get "/me", to:"users#show"
  post "/login", to:"sessions#create"
  delete '/logout', to:"sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
