class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  has_secure_password
  field :login, type: String
  field :password_digest, type: String
  field :name, type: String
  field :preview, type: String
  field :telegram, type: String
  field :email, type: String
end
