class GenresController < ApplicationController
    skip_before_action :authorize, only: [:index, :destroy]

    def create 
        render json: Genre.create!(genre_params), status: :created
    end

    def index 
        render json: Genre.all, status: :ok
    end

    def show 
        render json: Genre.find(params[:id]), status: :ok
    end

    def destroy
        Genre.find(params[:id]).destroy
        head: :no_content
    end

    private 

    def genre_params
        params.permit(:genre_name)
    end
end
