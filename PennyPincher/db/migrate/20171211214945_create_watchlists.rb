class CreateWatchlists < ActiveRecord::Migration[5.1]
  def change
    create_table :watchlists do |t|
      t.string :stock_symbol
      t.integer :user_id
      t.timestamps
    end
     add_index :watchlists, :user_id
  end
end
