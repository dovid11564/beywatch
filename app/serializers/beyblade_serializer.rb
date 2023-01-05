class BeybladeSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :price, :power_type, :power_level, :image
  # has_one :user
end
