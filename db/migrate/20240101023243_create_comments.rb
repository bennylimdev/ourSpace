class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :post_id, null: false
      t.integer :author_id, null: false
      t.integer :parent_comment_id
      t.timestamps
    end
    add_index :users, :author_id
    add_index :posts, :post_id
  end
end
