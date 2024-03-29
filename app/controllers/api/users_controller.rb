class Api::UsersController < ApplicationController
    def index
        @users = User.all.with_attached_profile_pic #solves N+1 query prob
    end

    def show 
        @user = User.find(params[:id])
        render :show
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private 

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :bio, :birthday, :profile_pic) 
    end
end