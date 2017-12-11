# == Schema Information
#
# Table name: watchlists
#
#  id            :integer          not null, primary key
#  stock_symbols :text             default([]), is an Array
#  user_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Watchlist < ApplicationRecord
    validates :user_id, :stock_symbols, presence: true
    belongs_to :user
end
