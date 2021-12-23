Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :songs, only: [:index, :show, :create, :destroy]
  resources :genres, only: [:index, :create]
  resources :users, only: [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
