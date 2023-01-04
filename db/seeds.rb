# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding beyblades"
Beyblade.destory_all

Beyblade.create!(name: "Storm Pegasus", model: "105_RF", price: 12.99, power_type: "Attack", power_level: 10)
Beyblade.create!(name: "Rock Leone", model: "145_WB", price: 11.99, power_type: "Defense", power_level: 10)
Beyblade.create!(name: "Phantom Orion", model: "B:D", price: 19.99, power_type: "Stamina", power_level: 7)
Beyblade.create!(name: "Dark Bull", model: "BB-40", price: 5.99, power_type: "Balance", power_level: 6)
Beyblade.create!(name: "Earth Eagle", model: "BB-47", price: 12.99, power_type: "Balance", power_level: 7)
Beyblade.create!(name: "Lightning L-Drago", model: "BB-43", price: 8.99, power_type: "Attack", power_level: 9000)
puts "seeding done!"