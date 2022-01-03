class UsersController < ApplicationController
    before_action :find_user, only: :destroy
    before_action :current_user, only: :show
    skip_before_action :authorize, only: [:create, :index, :show, :destroy]

    def index
        render json: User.all, status: :ok
    end
    
    def create
        user = User.create!(user_params) 
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    def show
        render json: current_user, status: :ok
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
