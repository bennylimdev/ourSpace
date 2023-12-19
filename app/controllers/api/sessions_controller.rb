class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
        else
            render json: ['Wrong email and/or password'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
        else
            render json: ['Please Log in'], status: 404
        end
    end
end