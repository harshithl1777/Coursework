Rails.application.routes.draw do
  namespace :api do
    get 'tasks', to: 'tasks#index'
  end
  root 'app#index'
  get '/*path' => 'app#index'
end