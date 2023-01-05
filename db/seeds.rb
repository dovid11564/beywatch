# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding beyblades"
Beyblade.destroy_all

Beyblade.create!(name: "Storm Pegasus", model: "BB-28", price: 8.99, power_type: "Attack", power_level: 10, image: "https://static.wikia.nocookie.net/beyblade/images/1/11/StormPegasis.jpg/revision/latest/scale-to-width-down/350?cb=20101023055310")
Beyblade.create!(name: "Rock Leone", model: "BB-30", price: 8.99, power_type: "Defense", power_level: 10, image: "https://static.wikia.nocookie.net/beyblade/images/c/c6/RockLeone.jpg/revision/latest/scale-to-width-down/350?cb=20201117034020")
Beyblade.create!(name: "Phantom Orion", model: "BB-118", price: 9.99, power_type: "Stamina", power_level: 7, image: "https://static.wikia.nocookie.net/beyblade/images/7/71/0001.jpg/revision/latest/scale-to-width-down/350?cb=20210729031916")
Beyblade.create!(name: "Dark Bull", model: "BB-40", price: 6.99, power_type: "Balance", power_level: 6, image: "https://static.wikia.nocookie.net/beyblade/images/3/36/DarkBull.jpg/revision/latest/scale-to-width-down/350?cb=20101027050620")
Beyblade.create!(name: "Earth Eagle", model: "BB-47", price: 6.99, power_type: "Balance", power_level: 7, image: "https://static.wikia.nocookie.net/beyblade/images/0/08/Earth_Aquila.jpg/revision/latest/scale-to-width-down/350?cb=20110624031134")
Beyblade.create!(name: "Lightning L-Drago", model: "BB-43", price: 8.99, power_type: "Attack", power_level: 9000, image: "https://static.wikia.nocookie.net/beyblade/images/6/64/LightningLDrago.jpg/revision/latest/scale-to-width-down/350?cb=20201031071247")
puts "seeding done!"