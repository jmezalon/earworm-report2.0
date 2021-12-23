class SongsController < ApplicationController
    before_action :find_song, only: [:show, :destroy]

    def index
        render json: Song.all, status: :ok
    end

    def show
        render json: @song, status: :ok
    end

    def create
        render json: Song.create!(song_params), status: :created
    end

    def destroy
        @song.destroy
        head :no_content
    end

    private

    def song_params
        params.permit(:title, :img_url, :genre_id, :user_id)
    end

    def find_song
        @song = song.find(params[:id])
    end
end
