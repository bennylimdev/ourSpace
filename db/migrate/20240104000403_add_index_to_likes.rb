class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :post_id
    add_index :likes, :comment_id
  end
end
