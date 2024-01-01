# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all
Friend.destroy_all
Like.destroy_all

User.create!([
    {
        first_name: 'Demo', 
        last_name: 'Account', 
        email: 'demo@ourspace.com', 
        password: 'password', 
        bio: 'I love ourSpace, Benny Lim is a great dev'
    },
    {
        first_name: 'Benny', 
        last_name: 'Lim', 
        email: 'bennylimthedev@gmail.com', 
        password: 'password', 
        bio: 'Hello, Lets Connect, Add me!'
    },
    {
        first_name: 'Startup', 
        last_name: 'Employee', 
        email: 'employee@ourspace.com', 
        password: 'password', 
        bio: 'I love ourSpace, Benny Lim is a great boss'
    },
])

50.times do |index|
    User.create!(
        first_name: Faker::Name.first_name, 
        last_name: Faker::Name.last_name, 
        email: Faker::Name.unique.first_name + '@email.com',
        password: 'password', 
        bio: Faker::Lorem.paragraph 
    )
end

20.times do |index|
    Post.create!(
        body: Faker::Lorem.unique.paragraph, 
        author_id: rand(1...3)
    )
end

p "Created #{User.count} users"
p "Created #{Post.count} posts"

