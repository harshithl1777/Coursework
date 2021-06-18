class Api::TasksController < ActionController::Base
    def index
        render json: { :tasks => [
                { name: 'Task 1' }
            ] 
        }.to_json
    end
end