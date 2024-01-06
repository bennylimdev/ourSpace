json.extract! post, :id, :body, :author_id, :created_at
json.extract! post.user, :first_name, :last_name

if post.user.profile_pic.attached?
    json.profilepicUrl url_for(post.user.profile_pic)
else
    json.profilepicUrl ''
end

json.comments do
    post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :author_id, :parent_comment_id
        end
    end
end

json.postlikes do
    post.postlikes.each do |postlike|
        json.set! postlike.id do
            json.extract! postlike, :id, :post_id, :author_id
        end
    end
end
