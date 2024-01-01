class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :liked, null: false
      t.integer :author_id, null: false
      t.integer :post_id
      t.integer :comment_id
      t.timestamps
    end

    add_index :likes, :liked
    add_index :likes, :author_id
  end
end
