Rails.application.routes.draw do

  root to: 'posts#index'
  get '/posts' => 'posts#index'
  get '/posts/new'
  post '/posts' => 'posts#create'
  get '/posts/:id' => 'posts#show', as: 'post'
  get '/posts/:id/edit' => 'posts#edit', as: 'edit_post'
  patch '/posts/:id' => 'posts#update'
  delete '/posts/:id' => 'posts#destroy'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

end
