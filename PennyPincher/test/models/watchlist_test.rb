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

require 'test_helper'

class WatchlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
