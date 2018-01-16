class CreateComments < ActiveRecord::Migration[5.1]
    def change
      create_table :comments do |t|
        t.string :ticker
        t.integer :user_id
        t.text :body

        t.timestamps
      end
        add_index :comments, :ticker
        add_index :comments, :user_id
     end
end
