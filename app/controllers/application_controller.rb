class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    private

    def render_not_found
        render json: { error: "Not found" }, status: :not_found
    end

    def render_invalid(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def current_user
        @current_user = User.first
    end
end
