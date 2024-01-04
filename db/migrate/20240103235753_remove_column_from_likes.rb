class RemoveColumnFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :liked
  end
end
