# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Idea.create([

  { id: 1, title: "Idea One", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus tortor, auctor lobortis metus et, cursus porttitor massa." },
  { id: 2, title: "Idea Two", body: "Mauris sollicitudin luctus arcu. Maecenas eget massa vitae nulla pretium dapibus id sit amet arcu. Nunc dignissim mauris vel egestas venenatis." },
  { id: 3, title: "Idea Three", body: "Sed vulputate ex sed sapien varius efficitur." },
  { id: 4, title: "Idea Four", body: "In finibus venenatis suscipit. Suspendisse id erat leo. Aenean eget magna eget urna eleifend ullamcorper." },
  { id: 5, title: "Idea Five", body: "Aenean efficitur accumsan interdum. Duis eget libero ac dolor ullamcorper volutpat. Sed quis tellus laoreet, dignissim nibh vitae, consectetur ante." }

])
