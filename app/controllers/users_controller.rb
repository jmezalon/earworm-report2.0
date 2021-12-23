class UsersController < ApplicationController
    before_action :find_user, only: [:show, :destroy]

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: @user, status: :ok
    end

    def create
        render json: User.create!(user_params), status: :created
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
