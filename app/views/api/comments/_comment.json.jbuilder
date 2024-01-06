json.extract! comment, :id, :body, :post_id, :author_id, :parent_comment_id, :created_at
json.extract! comment.user, :first_name, :last_name

if comment.user.profile_pic.attached?
    json.profilepicUrl url_for(comment.user.profile_pic)
else
    json.profilepicUrl ''
end