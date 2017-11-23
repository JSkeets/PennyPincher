# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  premium           :boolean          default(FALSE), not null
#  email             :string           not null
#  phone_number      :integer          not null
#  fname             :string           not null
#  lname             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  activation_digest :string
#  activated         :boolean
#  activated_at      :datetime
#

class User < ApplicationRecord

  validates :username, :session_token, :password_digest, presence:true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_create :create_activation_digest
  after_initialize :ensure_session_token
  attr_accessor :activation_token

  attr_reader :password

   def create_activation_digest
    # Create the token and digest.
    self.activation_token  = User.generate_session_token
    self.activation_digest = BCrypt::Password.create(activation_token)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end



end
