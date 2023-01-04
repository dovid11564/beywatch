class User < ApplicationRecord
  has_secure_password 
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password, presence: true
#   validates :password, numercality: 
has_many :inventories
has_many :beyblades, through: :inventories
end
