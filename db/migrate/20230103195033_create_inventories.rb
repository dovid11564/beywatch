class CreateInventories < ActiveRecord::Migration[6.1]
  def change
    create_table :inventories do |t|
      t.references :user, null: false, foreign_key: true
      t.references :beyblade, null: false, foreign_key: true

      t.timestamps
    end
  end
end
