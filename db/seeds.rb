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
Friendrequest.destroy_all
Postlike.destroy_all

User.create!([
    {
        first_name: 'Tony', 
        last_name: 'Stark', 
        email: 'tonystark@ourspace.com', 
        password: 'password', 
        bio: 'I love ourSpace, Benny Lim is a great dev'
    },
    {
        first_name: 'Edgar Codd', 
        last_name: 'Employee', 
        email: 'employee@ourspace.com', 
        password: 'password', 
        bio: 'I love ourSpace, great use of my invention. I love relational databases.'
    },
])

29.times do |index|
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

Friendrequest.create!([
    { 
        user_id: 1,
        friend_id: 5,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 2,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 3,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 7,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 8,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 9,
        confirmed: true 
    },
    {
        user_id: 1,
        friend_id: 10,
        confirmed: true 
    },
],
)


p "Created #{User.count} users"
p "Created #{Post.count} posts"

