class Api::CommentsController < ApplicationController
    before_action :find_comment, only: [:update, :destroy]
    before_action :current_user, only: :create
    skip_before_action :authorize, only: :index

    def index
        render json: Comment.all, status: :ok
    end

    def create
        render json: @current_user.comments.create!(comment_params), status: :created
    end

    def update 
        @comment.update!(comment_params)
        render json: @comment, status: :accepted 
    end

    def destroy
        @comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:user_id, :comment_body, :song_id)
    end

    def find_comment
        @comment = Comment.find(params[:id])
    end
end
