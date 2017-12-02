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
#  reset_digest      :string
#  reset_sent_at     :datetime
#

class User < ApplicationRecord

  validates :username, :session_token, :password_digest, presence:true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_create :create_activation_digest
  after_initialize :ensure_session_token
  attr_accessor :activation_token, :reset_token

  attr_reader :password

   def create_activation_digest
      if self.activation_digest.blank?
          self.activation_digest = SecureRandom.urlsafe_base64.to_s
      end
   end

  def create_reset_digest
    self.reset_token = User.new_token
    update_attribute(:reset_digest,  User.digest(reset_token))
    update_attribute(:reset_sent_at, Time.zone.now)
  end

  # Sends password reset email.
  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
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

  def email_activate
    self.activated= true
    self.activation_digest = nil
    save!(:validate => false)
  end

  private

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end



end
