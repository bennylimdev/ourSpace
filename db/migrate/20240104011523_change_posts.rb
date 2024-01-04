class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    rename_table('likes', 'postlikes')
    remove_column :postlikes, :comment_id
  end
end
