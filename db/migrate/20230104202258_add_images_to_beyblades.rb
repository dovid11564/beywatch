class AddImagesToBeyblades < ActiveRecord::Migration[6.1]
  def change
    add_column :beyblades, :image, :string
  end
end
