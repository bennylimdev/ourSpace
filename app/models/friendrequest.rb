class Friendrequest < ApplicationRecord
    belongs_to :user
  
    def self.reacted?(id1, id2)
        case1 = !Friendrequest.where(user_id: id1, friend_id: id2).empty?
        case2 = !Friendrequest.where(user_id: id2, friend_id: id1).empty?
        case1 || case2
    end
  
    def self.confirmed_record?(id1, id2)
        case1 = !Friendrequest.where(user_id: id1, friend_id: id2, confirmed: true).empty?
        case2 = !Friendrequest.where(user_id: id2, friend_id: id1, confirmed: true).empty?
        case1 || case2
    end
  
    def self.find_friendrequest(id1, id2)
        if Friendrequest.where(user_id: id1, friend_id: id2, confirmed: true).empty?
            Friendrequest.where(user_id: id2, friend_id: id1, confirmed: true).first.id
        else
            Friendrequest.where(user_id: id1, friend_id: id2, confirmed: true).first.id
        end
    end
  end