class GenresController < ApplicationController

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
