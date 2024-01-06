class Api::FriendrequestsController < ApplicationController

    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end

end
