class FavoritesController < ApplicationController
    before_action :find_favorite, only: :destroy

    def index
        render json: Favorite.all, status: :ok
    end

    def create
        render json: @current_user.favorites.create!(favorite_params), status: :created
    end

    def destroy
        @favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:song_id)
    end

    def find_favorite
        @favorite = favorite.find(params[:id])
    end
end
