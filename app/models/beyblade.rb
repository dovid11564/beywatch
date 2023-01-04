class Beyblade < ApplicationRecord
  has_many :inventories
  has_many :users, through: :inventories
end
