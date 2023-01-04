class CreateBeyblades < ActiveRecord::Migration[6.1]
  def change
    create_table :beyblades do |t|
      t.string :name
      t.string :model
      t.float :price
      t.string :power_type
      t.integer :power_level
  

      t.timestamps
    end
  end
end
