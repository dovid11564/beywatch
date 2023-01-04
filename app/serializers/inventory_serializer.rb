class InventorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :beyblade
end
