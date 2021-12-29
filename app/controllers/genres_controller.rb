class GenresController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create 
        render json: Genre.create!(genre_params), status: :created
    end

    def index 
        render json: Genre.all, status: :ok
    end

    private 

    def genre_params
        params.permit(:genre_name)
    end
end
