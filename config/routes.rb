Rails.application.routes.draw do
  
  # TODO: specify only the routes we will be using
  resources :inventories
  resources :beyblades, only: [:index]
  resources :users, only: [:create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # beyblades path
  get "/beyblades", to: "beyblades#index"
end
