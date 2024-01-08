json.extract! user, :id, :email, :first_name, :last_name, :bio, :friendrequests, :pending_friendrequests, :friends

if user.profile_pic.attached?
        json.profilepicUrl url_for(user.profile_pic)
    else
        json.profilepicUrl ''
end

json.posts do 
    user.posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :body, :author_id
            json.extract! post.user, :first_name, :last_name
            if post.user.profile_pic.attached?
                json.profilepicUrl url_for(user.profile_pic)
            else
                json.profilepicUrl ''
            end
        end
    end
end

