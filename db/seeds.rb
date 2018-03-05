# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

links = Link.create(
  [{
     url: 'https://www.youtube.com',
     title: 'YouTube',
     description: 'The world\'s largest video sharing site.',
   }, {
     url: 'https://news.ycombinator.com',
     title: 'Hacker News',
     description: ('A site for programmers and others to discus coding and ' + 
                   'other technologies.'),
   }, {
     url: 'https://en.wikipedia.org/wiki/Main_Page',
     title: 'English Wikipedia',
     description: 'The online encyclopedia that anyone can edit, in English.',
   }, {
     url: 'https://www.blackfem.org/',
     title: 'BlackFem Homepage',
     description: ('The homepage of BlackFem Inc, a non-profit dedicated to ' + 
                   'financial literacy for schoolchildren.'),
   }]
)
