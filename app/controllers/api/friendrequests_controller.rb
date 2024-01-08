class Api::FriendrequestsController < ApplicationController

    def create
        id1 = params[:ids][:id1]
        id2 = params[:ids][:id2]
        @friendrequest = Friendrequest.new(user_id: id1, friend_id: id2)
        @friendrequest.save!
    end

    def destroy
        friendrequest = Friendrequest.find(params[:friendrequest_id])
        friendrequest.destroy!
    end

    def update
        friendrequest = Friendrequest.find(params[:id])
        friendrequest.update(confirmed: true)
    end
    
end
