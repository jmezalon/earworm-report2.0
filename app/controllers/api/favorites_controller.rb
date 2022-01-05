class Api::FavoritesController < ApplicationController
    before_action :find_favorite, only: :destroy
    before_action :current_user, only: :create
    skip_before_action :authorize, only: :index

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
        params.permit(:user_id, :song_id)
    end

    def find_favorite
        @favorite = Favorite.find(params[:id])
    end
end
