class Comment < ApplicationRecord
    
  validates :ticker, :user_id, :body, presence: true

  belongs_to :user


end
