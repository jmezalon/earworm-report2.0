puts "beging seeding ...."


User.create!(username: "Demo", password_digest: "demo")
User.create!(username: "Maximax", password_digest: "max1")
User.create!(username: "Gerald", password_digest: "gerald1")
User.create!(username: "Nikki", password_digest: "nikki1")
User.create!(username: "Cassandra", password_digest: "cassie1")
User.create!(username: "Christelle", password_digest: "christie1")
User.create!(username: "Jadison", password_digest: "jdboss1")

rap = Genre.create!(genre_name: "Hip-Hop/Rap")
k = Genre.create!(genre_name: "Kompa")
Genre.create!(genre_name: "R&B")
Genre.create!(genre_name: "Reggae")
cont = Genre.create!(genre_name: "Contemporary")


Song.create!(title: "Lord, I need you" , img_url: "https://pbs.twimg.com/media/BId5rQICMAAfErg.jpg" , user_id: User.all.sample.id, genre_id: cont.id)
Song.create!(title: "M'ap Marye" , img_url: "https://i1.sndcdn.com/artworks-000157378894-0mfzyi-t500x500.jpg", user_id: User.all.sample.id, genre_id: k.id)
Song.create!(title: "Start Over" , img_url: "https://images.genius.com/9ff72ecce321980c87eed95e7304bd5f.1000x1000x1.jpg", user_id: User.all.sample.id, genre_id: Genre.all.sample.id)
Song.create!(title: "Lots of Love", img_url: "https://www.musiconvinyl.com/fotos/3910_foto1_product_xl.jpg", user_id: User.all.sample.id, genre_id: Genre.all.sample.id)
Song.create!(title: "My boo", img_url: "https://i.ytimg.com/vi/t4z6M7Tbpk0/hqdefault.jpg", user_id: User.all.sample.id, genre_id: Genre.all.sample.id)
Song.create!(title: "Middle Child", img_url: "https://i.ytimg.com/vi/LTNdtIq4IwY/maxresdefault.jpg" , user_id: User.all.sample.id, genre_id: rap.id)
Song.create!(title: "Pitit Deyo", img_url: "https://i.ytimg.com/vi/8sPUHKML2Yw/maxresdefault.jpg", user_id: User.all.sample.id, genre_id: k.id)
Song.create!(title: "Kenbe'l la", img_url: "https://direct.rhapsody.com/imageserver/images/Alb.269570892/500x500.jpg", user_id: User.all.sample.id, genre_id: k.id)
Song.create!(title: "Break every chain", img_url: "https://images-na.ssl-images-amazon.com/images/I/716x8wAvBxL._SL1500_.jpg", user_id: User.first.id, genre_id: cont.id)



40.times {
    Favorite.create!(user_id: User.all.sample.id, song_id: Song.all.sample.id)
}


Comment.create!(comment_body: 'best song ever', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'yes I do', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'fok mwen marye kamen', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'good job', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'my dream song', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'i love this song', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'thumbs up', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'the best of the best', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'this is lit', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'i have to blast this one', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'omg i love hearing this song', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'why not!!!', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'break the chains Jesus, please please please!!!', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'please do not let her go', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'yo, where do these guys get them lyrics', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'oh man, this is thriller', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'wow, simply wow!!!', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'omggggg', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'it has been a while but i love this girl', user_id: User.all.sample.id, song_id: Song.all.sample.id)
Comment.create!(comment_body: 'yes the victory belongs to Jesus', user_id: User.all.sample.id, song_id: User.first.id)

puts "done seeding!!!"
