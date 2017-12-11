# == Schema Information
#
# Table name: watchlists
#
#  id           :integer          not null, primary key
#  stock_symbol :string
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Watchlist < ApplicationRecord
    validates :stock_symbol, :user_id, presence: true
     belongs_to :user
end
