class CreateWatchlists < ActiveRecord::Migration[5.1]
  def change
    create_table :watchlists do |t|
      t.text :stock_symbols, array: true, default: []
      t.integer :user_id
      t.timestamps
    end
  end
end

